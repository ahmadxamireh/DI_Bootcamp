// Exercise 5: Creating and Using a Custom Module
// 1. Open a terminal and run npm init to initialize a new Node.js project.
// Follow the prompts to set up your project.
// 2. Install the lodash package, a utility library, by running npm install lodash in the terminal.
// 3. Create a file named math.js inside the directory.
// 4. In math.js, define a simple custom module that exports functions for addition and multiplication.

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

module.exports = {add, multiply};