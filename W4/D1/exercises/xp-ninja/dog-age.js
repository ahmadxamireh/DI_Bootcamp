// Exercise 1: Dog age to Human years
// Using the following data

const data = [
    {name: 'Butters', age: 3, type: 'dog'},
    {name: 'Cuty', age: 5, type: 'rabbit'},
    {name: 'Lizzy', age: 6, type: 'dog'},
    {name: 'Red', age: 1, type: 'cat'},
    {name: 'Joey', age: 3, type: 'dog'},
    {name: 'Rex', age: 10, type: 'dog'},
];
// 1. Use a loop to find the sum of the dogs’ ages in human years.
// - Hint: 1 dog year equals 7 human years

let totalAge = 0;
for (let pet of data) {
    if (pet.type === 'dog') {
        totalAge += pet.age;
    }
}
console.log(totalAge * 7);

// 2. Using the reduce() method, find the sum of the dogs’ ages in human years.

const totalAges2 = data.reduce((acc, curr) => acc + (curr.type === 'dog' ? curr.age : 0), 0);
console.log(totalAges2 * 7);