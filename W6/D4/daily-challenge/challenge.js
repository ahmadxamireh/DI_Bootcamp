// Challenge Task: Integrating Everything
// 1. Create a file named challenge.js.
// 2. In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

import {greet} from './task1/greeting.js';
import {colorfulMessage} from './task2/colorful-message.js';
import {readFileContent} from './task3/read-file.js';

// 3. Use the greet function to greet the user, display the colorful message, and read and display the file’s content.
console.log(greet('Ahmad'));
console.log(colorfulMessage());
readFileContent('./task3/file-data.txt');