// app component defines routes and runs an initial refresh to hydrate the token
// this allows returning users (with a valid refresh cookie) to get a new access token automatically

import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppDispatch } from "./app/hooks";
import { refreshToken } from "./features/auth/authSlice";

export default function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // attempt to refresh the access token on initial load
        // if it fails, nothing breaks; protected routes will still redirect to login
        dispatch(refreshToken());
    }, [ dispatch ]);

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile/>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={ <Navigate to="/"/> }/>
            </Routes>
        </>
    );
}