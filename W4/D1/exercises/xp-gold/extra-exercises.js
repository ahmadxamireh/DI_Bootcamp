// Exercise 1: Sum elements
// Write a JavaScript program to find the sum of all elements in an array.

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum);

// Exercise 2: Remove Duplicates
// Write a JavaScript program to remove duplicate items in an array.

const arr2 = [1, 2, 2, 3, 4, 5, 5]
const unique = [...new Set(arr2)]; // spreading Set back into an array
console.log(unique);

// or
// const unique = arr.filter((item, index) => arr.indexOf(item) === index);
// indexOf(item) returns the first index where the item appears
// If indexOf(item) === index, it means this is the first occurrence, so we keep it

// Exercise 3: Remove certain values
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

const sampleArr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
const filteredArr = sampleArr.filter(x => x) // filters out falsy values: NaN, 0, false, '', undefined, null
console.log(filteredArr);

// Exercise 4: Repeat please!
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

function repeat(word, times) {
    let output = '';
    for (let i = 0; i < times; i++) {
        output += word;
    }
    return output;
}

console.log(repeat('Ha!', 3));

// Exercise 5: Turtle & Rabbit
// Using this code:

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Line up the Turtle and the Rabbit at the start line.
const startLineIndex = startLine.indexOf('||');
// turtle = ' '.repeat(startLineIndex + 2) + turtle;
turtle = turtle.padStart(startLineIndex + 2, ' ')
// rabbit = ' '.repeat(startLineIndex + 2) + rabbit;
rabbit = rabbit.padStart(startLineIndex + 2, ' ')
console.log(startLine);
console.log(turtle);
console.log(rabbit);
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);
