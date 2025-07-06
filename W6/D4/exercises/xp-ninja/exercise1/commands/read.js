// Use the fs module to read and display the content of a specified file in the terminal.

import fs from 'fs';

export function displayContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error(err);
        console.log(data)
    });
}