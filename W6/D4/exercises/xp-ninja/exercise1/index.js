// implement the command-line utility using the commander package
// npm install commander

import {Command} from 'commander';
import {colorfulMessage} from './commands/greet.js';
import {fetchData} from './commands/fetch.js';
import {displayContent} from './commands/read.js';

const program = new Command();

program
    .name('Ninja Exercise CLI')
    .description('CLI to some custom commands')
    .version('0.1.0');

// Use the commander package to define different commands (e.g., greet, fetch, read).
// Map each command to its respective module in the commands directory.

program
    .command('greet')
    .description('Show a colorful message by using Chalk package')
    .argument('<string>', 'message to show in a colorful way (write message between quotation marks)')
    .action(message => colorfulMessage(message));

program
    .command('fetch')
    .description('Fetches data from Weather Forecast API based on provided latitude and longitude')
    .arguments('<latitude> <longitude>')
    .action((latitude, longitude) => fetchData(latitude, longitude))

program
    .command('read')
    .description('Display content from a text file at a given path')
    .argument('<string>', 'path to folder (write the path between quotation marks)')
    .action((path) => displayContent(path))

// Parse command-line arguments and execute the appropriate command.
program.parse();