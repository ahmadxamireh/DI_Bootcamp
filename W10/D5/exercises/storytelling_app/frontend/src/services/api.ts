// src/services/api.ts
// central axios instance with:
// - base url from vite env
// - credentials enabled (for http-only refresh cookie)
// - request interceptor to attach access token
// - response interceptor to refresh and replay failed 401 once

import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
    AxiosHeaders,
} from "axios";

// keep access token in a module variable so interceptors can read it
let accessToken: string | null = null;

// allow the auth slice to update the in-memory token
export const setAccessToken = (token: string | null) => {
    accessToken = token;
};

// create axios instance configured for our api
export const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true // include cookies so the server sees the refresh token
});

// attach access token to outgoing requests if present
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // ensure headers exist and are compatible with axios v1 types
    if (!config.headers) {
        // create a concrete headers container if missing
        config.headers = new AxiosHeaders();
    }

    if (accessToken) {
        // when headers is AxiosHeaders, prefer .set(); otherwise assign directly
        config.headers.set("Authorization", `Bearer ${ accessToken }`);
    }

    return config; // must return InternalAxiosRequestConfig
});

// simple refresh inflight lock to avoid multiple simultaneous refresh calls
let isRefreshing = false;
let pendingRequests: Array<(token: string | null) => void> = [];

// helper to broadcast new token to queued requests
const flushQueue = (token: string | null) => {
    pendingRequests.forEach((cb) => cb(token));
    pendingRequests = [];
};

// on 401, try to refresh and then replay the original request once
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        // original is typed as InternalAxiosRequestConfig; add a private _retry marker
        const original = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;

        // if there is no response or no original request, just reject
        if (!error.response || !original) {
            return Promise.reject(error);
        }

        // only handle 401 once per request
        if (error.response.status === 401 && !original._retry) {
            original._retry = true;

            // if a refresh is already happening, wait for it to finish
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    pendingRequests.push((newToken) => {
                        // ensure headers object exists
                        if (!original.headers) {
                            original.headers = new AxiosHeaders();
                        }

                        if (newToken) {
                            original.headers.set("Authorization", `Bearer ${ newToken }`);
                        } else {
                            original.headers.delete("Authorization");
                        }

                        api.request(original).then(resolve).catch(reject);
                    });
                });
            }

            // otherwise, perform the refresh now
            isRefreshing = true;
            try {
                // call /refresh (cookie is sent automatically due to withCredentials)
                const { data } = await api.post<{ accessToken: string }>("/refresh");

                // update in-memory token for subsequent requests
                setAccessToken(data.accessToken);

                // wake up queued requests
                flushQueue(data.accessToken);

                // update the current original request with the new token and replay it
                if (!original.headers) {
                    original.headers = new AxiosHeaders();
                }
                original.headers.set("Authorization", `Bearer ${ data.accessToken }`);

                return api.request(original);
            } catch (refreshErr) {
                // if refresh failed, clear token and wake queue with null so they can fail gracefully
                setAccessToken(null);
                flushQueue(null);
                return Promise.reject(refreshErr);
            } finally {
                isRefreshing = false;
            }
        }

        // any other error is passed through
        return Promise.reject(error);
    }
);