// register page with username, email, password fields
// on success, we auto-login (handled in the thunk) and go to /profile

import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { registerUser, selectAuthError, selectAuthStatus } from "../features/auth/authSlice";

export default function Register() {
    // local input states
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const status = useAppSelector(selectAuthStatus);
    const error = useAppSelector(selectAuthError);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await dispatch(registerUser({ username, email, password }));
        if (registerUser.fulfilled.match(result)) {
            navigate("/profile", { replace: true });
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            {/* card container */ }
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h1>

                <form onSubmit={ onSubmit } className="space-y-5">
                    {/* username field */ }
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            username
                        </label>
                        <input
                            id="username"
                            value={ username }
                            onChange={ (e) => setUsername(e.target.value) }
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900
                         shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                        />
                    </div>

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
                        { status === "loading" ? "creating account..." : "register" }
                    </button>
                </form>

                {/* error message */ }
                { error && (
                    <p className="mt-4 text-sm text-red-600" role="alert" aria-live="polite">
                        { error }
                    </p>
                ) }
            </div>
        </div>
    );
}