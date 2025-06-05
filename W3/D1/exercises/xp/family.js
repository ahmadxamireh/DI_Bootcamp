/*
 🌟 Exercise 5 : Family
 Instructions
 1. Create an object called family with a few key value pairs.
 2. Using a for in loop, console.log the keys of the object.
 3. Using a for in loop, console.log the values of the object.
 */

const family = {
    lastName: "Potter",
    members: ["James", "Lily", "Harry", "Albus Severus", "James Sirius", "Lily Luna"],
    address: "Hogwarts",
    age: 1000
}

for (let key in family) {
    console.log(key)
}

for (let key in family) {
    console.log(family[key]);
}