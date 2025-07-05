// Task 3: Advanced File Operations
// 1. Create a file named file-data.txt and add some text content to it.
// 2. Create a file named read-file.js.
// 3. In read-file.js, require the fs module and read the content from the file-data.txt file.
// Display the content in the terminal.

import fs from 'fs';

export function readFileContent() {
    fs.readFile('./file-data.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log(data);
    });
}