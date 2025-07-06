// display the result of the function created in date.js

const getMinutesLivedSince = require('./date.js')

console.log(getMinutesLivedSince().toLocaleString(), 'minutes lived!');

// Bonus: Try to find a node module that allows to prompt the user for his birthdate.
// Answer: npm install inquirer (implemented in a different exercise)