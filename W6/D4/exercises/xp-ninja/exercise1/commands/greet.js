// Use the chalk package to create a colorful greeting message and display it in the terminal.

import chalk from 'chalk';

export function colorfulMessage(message) {
    console.log(chalk.yellowBright(message));
}