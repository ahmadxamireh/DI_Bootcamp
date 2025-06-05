// Exercise 3: Playing with numbers
// Instructions
// Requirements: Don’t use built-in JavaScript methods to answer the following questions.
// You have to create the logic by yourself. Use simple for loops.

let ages = [20, 5, 12, 43, 98, 55];

// 1. Console.log the sum of all the numbers in the age array.

let total = 0;
for (let age of ages) {
    total += age;
}
console.log(total);

// 2. Console.log the highest age in the array.

let highestAge = ages[0];
for (let age of ages.slice(1)) { // skipping first age because we start the comparison with it
    if (age > highestAge) {
        highestAge = age;
    }
}
console.log(highestAge);