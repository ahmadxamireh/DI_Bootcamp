// 🌟 Exercise 3: JSON Mario
// Instructions
// Using this code:

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

// 1. Convert this JS object into a JSON object. What happens to the nested objects?
console.log('The nested objects remain nested to their respective key.')

// 2. Convert and pretty print this JS object into a JSON object. Hint: Check out the JSON lesson on the platform.
const objToJSON = JSON.stringify(marioGame, null, 2)
console.log(objToJSON)
