// Exercise 5 : Regular Expression #1
// Goal: Extract numbers from a string and return them as one combined string

function returnNumbers(str) {
  return str.match(/\d/g).join('');
}

// Test
console.log(returnNumbers('k5k3q2g5z6x9bn')); // Output: 532569