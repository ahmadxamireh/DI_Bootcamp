// Exercise 3: SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.

const str = 'The Quick Brown Fox'

const newStr = Array.from(str).map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
console.log(newStr.join(''));
