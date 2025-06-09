// 1st daily challenge
//
// 1. Create two functions. Each function should return a promise.
//
// 2. The first function called makeAllCaps(), takes an array of words as an argument
// - If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array
// of words uppercase.
// Else, reject the promise with a reason.

function makeAllCaps(wordsArr) {
    return new Promise((resolve, reject) => {
        const allStrings = wordsArr.every(word => typeof word === 'string');
        if (allStrings) {
            resolve(wordsArr.map(word => word.toUpperCase()));
        } else {
            reject('Error: not all the items in the array are strings.')
        }
    })
}

// 2. The second function called sortWords(), takes an array of words uppercased as an argument
// - If the array length is bigger than 4, resolve the promise.
// - The value of the resolved promise is the array of words sorted in alphabetical order.
// Else, reject the promise with a reason.

function sortWords(wordsArr) {
    return new Promise((resolve, reject) => {
        if (wordsArr.length > 4) {
            resolve(wordsArr.sort())
        } else {
            reject('Error: the array of words has less than 4 items.')
        }
    })
}

// in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

// in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

// in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))