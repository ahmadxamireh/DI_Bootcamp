// 🌟 Exercise 3: User & id
// Instructions
// Using this object
const users = {user1: 18273, user2: 92833, user3: 90315}

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI: The number is their ID number.

let usersArray = Object.entries(users)
console.log(usersArray)

// 2. Modify the outcome of part 1 by multiplying the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

for (let user of usersArray) {
    user[1] *= 2
}
console.log(usersArray)
