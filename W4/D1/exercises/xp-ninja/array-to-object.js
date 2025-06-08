// Exercise 4: Array to Object
// Using this array
const letters = ['x', 'y', 'z', 'z'];

// 1. Use a for loop to get this output { x: 1, y: 1, z: 2 };

let obj = {}
for (let char of letters) {
    // if (obj[char]) {
    //     obj[char] += 1;
    // } else {
    //     obj[char] = 1;
    // }
    obj[char] = (obj[char] || 0) + 1;
}
console.log(obj);

// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

// accumulator starts as an empty object {}
// then we repeat what we did in part 1
const obj2 = letters.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});

console.log(obj2);