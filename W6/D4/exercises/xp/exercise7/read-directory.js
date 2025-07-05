// 3. Create another file named read-directory.js.
// 4. In read-directory.js, use the fs module to read the list of files in a specified directory
// and display their names in the terminal.

import fs from 'fs';

fs.readdir('.', (err, files) => {
    if (err) return console.log(err);
    console.log(files);
})