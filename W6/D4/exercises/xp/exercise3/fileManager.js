// Exercise 3: File Management using CommonJS syntax
// 1. Create a file named fileManager.js.
// 2. Inside fileManager.js, define a module that exports functions for reading and writing files.
//  - Implement the readFile function to read the content of a specified file using the fs module.
//  - Implement the writeFile function to write content to a specified file using the fs module.
//  - Export functions named readFile and writeFile.

const fs = require('fs');

function readFile(filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) return console.error(err);
        console.log(data.toString());
    });
}

function writeFile(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) return console.error(err);
    });
}

module.exports = {readFile, writeFile};