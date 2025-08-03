import React, {useState, useEffect} from "react";

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

export const UserList: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!data.ok) setError("Fetch failed!");
                const response = await data.json();
                setUsers(response);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <p>An error has occurred: {error}</p>
            ) : (
                <>
                    {users.map(user => (
                        <div key={user.id} style={{ border: "1px solid red" }}>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}