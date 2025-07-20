import React from 'react';
import UserFavoriteAnimals from "./UserFavoriteAnimals.jsx";
import './App.css'
import Exercises from "./Exercise3.jsx"

const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;

    return (
        <div>
            <p>Hello World!</p>
            {myelement}
            <p>React is {sum} times better with JSX</p>

            <h3>First name: {user.firstName}</h3>
            <h3>Last name: {user.lastName}</h3>

            <UserFavoriteAnimals favAnimals={user.favAnimals} />

            <Exercises />
        </div>
    );
}

export default App
