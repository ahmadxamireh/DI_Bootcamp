// Exercise 1: Divisible by three
// Instructions

let numbers = [123, 8409, 100053, 333333333, 7]

// 1. Loop through the array above and determine whether each number is divisible by three.
// 2. Each time you loop console.log true or false.

numbers.forEach(number => console.log(number % 3 === 0));