// Task 2
// 1. Open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 2. Install the chalk package by running npm install chalk in the terminal.
// 3. Create a file named colorful-message.js.
// 4. In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from 'chalk'; // in Chalk v5, only ES6 import is supported.

export const colorfulMessage = () => chalk.cyan('This is a colorful challenge!');