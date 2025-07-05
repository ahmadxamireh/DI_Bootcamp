// 3. Create a file “Hello World.txt” containing the sentence "Hello World !! "
// 4. Create a file “Bye World.txt” containing the sentence "Bye World !! "
// 5. Create another file named app.js.
// 6. In app.js, import the functions from the fileManager.js module.

const functions = require('./fileManager.js');

// 7. Use the imported functions to read the content of the “Hello World.txt” text file
// and then write to the “Bye World.txt” with the content “Writing to the file”.

functions.readFile('./HelloWorld.txt')
functions.writeFile('./ByeWorld.txt', 'Writing to the file')