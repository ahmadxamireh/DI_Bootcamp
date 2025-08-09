// protect routes by checking if an access token exists
// if missing, redirect to /login

import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAccessToken } from "../features/auth/authSlice";

type Props = { children: ReactNode };

export default function ProtectedRoute({ children }: Props) {
    // read the current token from redux
    const token = useAppSelector(selectAccessToken);
    const location = useLocation();

    // if no token, send the user to login and preserve where they were going
    if (!token) {
        return <Navigate to="/login" replace state={ { from: location } }/>;
    }

    // otherwise, allow access to the protected page
    return <>{ children }</>;
}