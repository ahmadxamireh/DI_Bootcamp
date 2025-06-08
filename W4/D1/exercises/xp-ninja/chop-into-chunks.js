// Exercise 2: Chop into chunks
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter),
// and the outcome should be represented in an array.

function stringChop(str, num) {
    let arr = [];
    for (let i = 0; i < str.length; i += num) { // increment by the length of chopping
        arr.push(str.slice(i, i + num)); // if end index is larger than length, it returns up to length only
    }
    return arr;
}

console.log(stringChop('developers', 2));