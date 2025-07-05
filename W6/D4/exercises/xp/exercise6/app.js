// Exercise 6: Simple NPM Package Usage
// 1. open a terminal and run npm init to initialize a new Node.js project.
// Follow the prompts to set up your project.
// 2. Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.
// 3. Create a file named app.js inside the directory.
// 4. In app.js, require the chalk package and use it to color and style text in the terminal.

import chalk from 'chalk'; // in Chalk v5, only ES6 import is supported.

console.log(chalk.blue('Hello World!'));

console.log(chalk.rgb(100, 150, 200)('This is fun!'));