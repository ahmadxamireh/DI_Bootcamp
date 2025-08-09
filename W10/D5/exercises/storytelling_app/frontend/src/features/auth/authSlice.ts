// redux toolkit slice for authentication
// this stores the access token in memory (redux) and the current user profile
// it also exposes async thunks to call backend endpoints

import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { api, setAccessToken } from "../../services/api";
import type { RootState } from "../../app/store";
import type { User } from "@shared/user";

// define the shape of our auth state
interface AuthState {
    accessToken: string | null;
    user: User | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

// initial state starts with no token and no user
const initialState: AuthState = {
    accessToken: null,
    user: null,
    status: "idle",
    error: null
};

// register a new user then immediately login or fetch profile
export const registerUser = createAsyncThunk<
    { accessToken: string }, // return type
    { username: string; email: string; password: string }, // arg type
    { rejectValue: string }
>("auth/registerUser", async (payload, { rejectWithValue }) => {
    try {
        // send registration details to the backend
        await api.post("/register", payload);
        // after successful registration, perform login to obtain token
        const { data } = await api.post<{ accessToken: string }>("/login", {
            email: payload.email,
            password: payload.password
        });
        return data;
    } catch (err: any) {
        // extract server error message if available
        const message = err?.response?.data?.error ?? "registration failed";
        return rejectWithValue(message);
    }
});

// login existing user and receive access token
export const loginUser = createAsyncThunk<
    { accessToken: string },
    { email: string; password: string },
    { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
    try {
        const { data } = await api.post<{ accessToken: string }>("/login", payload);
        return data;
    } catch (err: any) {
        const message = err?.response?.data?.error ?? "login failed";
        return rejectWithValue(message);
    }
});

// call refresh endpoint to obtain a fresh access token (uses http-only cookie)
export const refreshToken = createAsyncThunk<
    { accessToken: string },
    void,
    { rejectValue: string }
>("auth/refreshToken", async (_, { rejectWithValue }) => {
    try {
        const { data } = await api.post<{ accessToken: string }>("/refresh");
        return data;
    } catch (err: any) {
        const message = err?.response?.data?.error ?? "refresh failed";
        return rejectWithValue(message);
    }
});

// logout clears cookie server-side and clears auth client-side
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            await api.post("/logout");
            return;
        } catch (err: any) {
            const message = err?.response?.data?.error ?? "logout failed";
            return rejectWithValue(message);
        }
    }
);

// fetch profile from a protected endpoint using the current access token
export const fetchProfile = createAsyncThunk<
    User,
    void,
    { rejectValue: string }
>("auth/fetchProfile", async (_, { rejectWithValue }) => {
    try {
        const { data } = await api.get<User>("/profile");
        return data;
    } catch (err: any) {
        const message = err?.response?.data?.error ?? "failed to load profile";
        return rejectWithValue(message);
    }
});

// create the slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // allow manual setting/clearing of token if needed
        setToken(state, action: PayloadAction<string | null>) {
            state.accessToken = action.payload;
            // keep axios in sync with the new token
            setAccessToken(action.payload);
        },
        clearAuth(state) {
            state.accessToken = null;
            state.user = null;
            state.status = "idle";
            state.error = null;
            setAccessToken(null);
        }
    },
    extraReducers: (builder) => {
        // register
        builder.addCase(registerUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.accessToken = action.payload.accessToken;
            setAccessToken(action.payload.accessToken);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload ?? "registration failed";
        });

        // login
        builder.addCase(loginUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.accessToken = action.payload.accessToken;
            setAccessToken(action.payload.accessToken);
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload ?? "login failed";
        });

        // refresh
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
            setAccessToken(action.payload.accessToken);
        });
        builder.addCase(refreshToken.rejected, (state) => {
            // if refresh fails, we clear token but do not set an error here
            state.accessToken = null;
            setAccessToken(null);
        });

        // logout
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.accessToken = null;
            state.user = null;
            state.status = "idle";
            state.error = null;
            setAccessToken(null);
        });

        // profile
        builder.addCase(fetchProfile.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload ?? "failed to load profile";
        });
    }
});

export const { setToken, clearAuth } = authSlice.actions;

// selectors for easy usage in components
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;