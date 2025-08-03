import React from 'react';

interface GreetingProps {
    name: string;
    messageCount: number;
}

export const Greeting: React.FC<GreetingProps> = ({name, messageCount}) => {
    return (
        <>
            <h1>Name: {name}</h1>
            <p>Messages: {messageCount}</p>
        </>
    );
}