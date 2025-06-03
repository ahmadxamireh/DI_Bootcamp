// Exercise 3: Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log('This creates a new array starting with "bread", followed by the contents of vegetables, then "chicken",' +
    ' and finally the contents of fruits.');
console.log(result);

// ------2------
const country = "USA";
console.log('The string "USA" is iterable, so spreading it with (...) turns it into an array of its characters.')
console.log([...country]);

// ------Bonus------
let newArray = [...[, ,]];
console.log('[,,] creates an array with 2 empty slots, also known as "holes", and using the spread operator (...)' +
    ' preserves the holes. This results in an array with empty slots.')
console.log(newArray);