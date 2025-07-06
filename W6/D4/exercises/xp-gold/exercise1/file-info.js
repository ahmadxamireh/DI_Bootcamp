// In file-info.js, require the path and fs modules and implement the following functionality:

const path = require('path');
const fs = require('fs');

function getFileStats() {
    // Use the path.join function to create a file path to the example.txt file within the data directory.
    const fullPath = path.join(__dirname, 'data', 'example.txt');

    // Use the fs.existsSync function to check if the file exists.
    const exist = fs.existsSync(fullPath);

    // Use the fs.statSync function to get information about the file, such as size and creation time.
    const stats = fs.statSync(fullPath);

    // Display the file’s existence, size, and creation time in the terminal.
    console.log(`File exists: ${exist}, size: ${stats.size}, creation time (ms): ${stats.birthtimeMs}.`);
}

exports.getFileStats = getFileStats;