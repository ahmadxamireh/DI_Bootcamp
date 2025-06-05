// Daily challenge GOLD: Bubble Sort
//
// What You will learn:
// Use array methods and loops to solve a sorting algorithm
// Use nested for loops
//
// Instructions

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using the .toString() method convert the array to a string.

const stringNumbers = numbers.toString() // 5,0,9,1,7,4,2,6,3,8

// 2. Using the .join()method convert the array to a string. Try passing different values into the join.
// - Eg .join(“+”), .join(” “), .join(“”)

const stringNumbers2 = numbers.join(' ') // 5 0 9 1 7 4 2 6 3 8

// 3. Bonus: To do this Bonus look up how to work with nested for loops
// - Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// - The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
console.log(numbers);

// - 1 to not go out of range and - i to reduce the range; because the last number is already sorted at each iteration.

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(numbers)
console.log(numbers);