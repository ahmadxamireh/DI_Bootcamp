import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice.js";
import { useEffect } from "react";

export default function UserData() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [ dispatch ])

    const userState = useSelector(state => state.users);

    return (
        <>
            {userState.status === 'loading' ? (
                <h1>Loading users information</h1>
            ) : userState.status === 'failed' ? (
                <>
                    <h1>Error loading users information</h1>
                    <p>Error details: {userState.error}</p>
                </>
            ) : (
                (
                    <>
                        <h1>Users information</h1>
                        {
                            userState.userList.map(user => (
                                <div key={user.id} style={{ padding: "10px", border: "1px solid black" }}>
                                    <p>Name: {user.name}</p>
                                    <p>Username: {user.username}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Address: {user.address.street} {user.address.suite} {user.address.city}</p>
                                </div>
                            ))
                        }
                    </>
                )
            )}
        </>
    );
}