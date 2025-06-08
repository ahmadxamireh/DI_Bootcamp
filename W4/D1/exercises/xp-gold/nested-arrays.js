// Exercise 4: Nested arrays
// Instructions
// 1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]],
// and modify it to look like this array: [1,2,3,[4],[5]].
// - Bonus Try to do it on one line.

const array = [[1], [2], [3], [[[4]]], [[[5]]]]
const x = array.flat(2)
console.log(x);

// 2. Using a method, take this array
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// and modify it to look like this array: ["Hello young grasshopper!", "you are", "learning fast!"].

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const y = greeting.map(item => item.join(' '))
console.log(y);

// 3. Turn the greeting array into a string: ‘Hello young grasshopper! You are learning fast!’.

console.log(y.join(' '))

// 4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const z = trapped.flat(Infinity)
console.log(z);