// login page with a simple form that calls the login thunk
// on success, navigate to /profile

import { type FormEvent, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser, selectAuthError, selectAuthStatus } from "../features/auth/authSlice";

export default function Login() {
    // local component state for form inputs
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // read status and potential error from redux for feedback
    const status = useAppSelector(selectAuthStatus);
    const error = useAppSelector(selectAuthError);

    // after login, redirect to the original page or profile by default
    const from = (location.state as any)?.from?.pathname || "/profile";

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(result)) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            {/* card container */ }
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>

                <form onSubmit={ onSubmit } className="space-y-5">
                    {/* email field */ }
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            placeholder="you@example.com"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900
                         shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                        />
                    </div>

                    {/* password field */ }
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                            placeholder="••••••••"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900
                         shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                        />
                    </div>

                    {/* submit button */ }
                    <button
                        type="submit"
                        disabled={ status === "loading" }
                        className="w-full rounded-md bg-blue-600 py-2.5 text-white font-medium
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                       disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        { status === "loading" ? "signing in..." : "login" }
                    </button>
                </form>

                {/* error message */ }
                { error && (
                    <p className="mt-4 text-sm text-red-600" role="alert" aria-live="polite">
                        { error }
                    </p>
                ) }

                {/* link to register */ }
                <p className="mt-6 text-sm text-gray-700">
                    don’t have an account?{ " " }
                    <Link to="/register" className="text-blue-600 hover:text-blue-700 underline">
                        register
                    </Link>
                </p>
            </div>
        </div>
    );
}