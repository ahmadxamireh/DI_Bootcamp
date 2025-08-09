// profile page loads the current user using the access token
// if the token has expired, axios interceptors will refresh and retry

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProfile, selectAuthUser, selectAuthStatus } from "../features/auth/authSlice";

export default function Profile() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectAuthUser);
    const status = useAppSelector(selectAuthStatus);

    useEffect(() => {
        // request user profile when the page mounts
        dispatch(fetchProfile());
    }, [ dispatch ]);

    return (
        <div style={ { maxWidth: 640, margin: "40px auto" } }>
            <h1>profile</h1>
            { status === "loading" && <p>loading...</p> }
            { user && (
                <pre style={ { background: "#f6f6f6", padding: 16 } }>
{ JSON.stringify(user, null, 2) }
        </pre>
            ) }
        </div>
    );
}