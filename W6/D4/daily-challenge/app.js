// Task 1:
// 4. Create another file named app.js in the same directory.
// 5. In app.js, require the greeting.js module and use the greet function to greet a user.

import {greet} from './greeting.js';
console.log(greet('Ahmad'));

// Task 2:
// 5. Create another file named app.js.
// 6. In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.

import {colorfulMessage} from './colorful-message.js'
console.log(colorfulMessage());

// Task 3:
// 4. Create another file named app.js.
// 5. In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.

import {readFileContent} from './read-file.js';
readFileContent();