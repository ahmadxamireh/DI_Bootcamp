// Exercise 7: Reading and Copying Files
// 1. Create a file named copy-file.js.
// 2. In copy-file.js, use the fs module to read the content from a file named source.txt
// and then write the same content to a new file named destination.txt.

import fs from 'fs';

let dataToCopy = '';

fs.readFile('./source.txt', (err, data) => {
    if (err) return console.log(err);
    fs.writeFile('./destination.txt', data, (err) => {
        if (err) return console.log(err);
    });
});