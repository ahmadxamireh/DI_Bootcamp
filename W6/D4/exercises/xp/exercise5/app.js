// 5. Create a file named app.js in the same directory.
// 6. In app.js, require the lodash package and the custom math module.

const lodash = require('lodash');
const math = require('./math.js');

// 7. Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

console.log(math.add(4, 6));
console.log(math.multiply(5, 7));

console.log(lodash.add(2, 3));
console.log(math.multiply(6, 9));