// simple navbar that shows login/register when logged out
// and profile/logout when logged in

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUser, selectAccessToken } from "../features/auth/authSlice";

export default function Navbar() {
    const token = useAppSelector(selectAccessToken);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        // call backend to clear the cookie and then clear redux state
        await dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <nav style={ { display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" } }>
            <Link to="/">home</Link>
            { !token ? (
                <>
                    <Link to="/login">login</Link>
                    <Link to="/register">register</Link>
                </>
            ) : (
                <>
                    <Link to="/profile">profile</Link>
                    <button onClick={ handleLogout } style={ { cursor: "pointer" } }>logout</button>
                </>
            ) }
        </nav>
    );
}