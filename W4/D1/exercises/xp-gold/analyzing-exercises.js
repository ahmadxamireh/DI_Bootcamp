// Exercise 1: Analyzing the map method
// Analyze this code, what will be the output?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

/*
Answer:
The map() method will map over the array elements.
Since the condition is true, the numbers will be multiplied by 2.
The original array will not be affected, because map() returns a new array object.
The output of the map: [2, 4, 6]
 */

// Exercise 2: Analyzing the reduce method
// Analyze this code, what will be the output?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

/*
Answer:
The reduce() method takes a callback function and an initial value.
the callback function concatenates the second array to the first one and returns it.
The reduce() method initial value is also an array and is added at the beginning of the result.
reduce() goes from left to right:
* Step 1: [1, 2] + [0, 1] → [1, 2, 0, 1]
* Step 2: [1, 2, 0, 1] + [2, 3] → [1, 2, 0, 1, 2, 3]
* result: [ 1, 2, 0, 1, 2, 3 ]
 */

// Exercise 3: Analyze this code
// Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// What is the value of i?

/*
Answer:
The callback function in map() method takes 3 parameters:
1. The element from the original array.
2. The index of the element in the array.
3. The array itself.

Therefore, the value of i will be the index.
 */