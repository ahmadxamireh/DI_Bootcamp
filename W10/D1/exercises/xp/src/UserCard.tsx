import React from 'react';

interface CardProps {
    name?: string;
    age?: number;
    role?: string;
}

export const UserCard: React.FC<CardProps> = ({name = "Ahmad", age = 27, role = "Dev"}) => {
    return (<h3>My name is {name}, I'm {age} years old and I'm a {role}.</h3>);
}