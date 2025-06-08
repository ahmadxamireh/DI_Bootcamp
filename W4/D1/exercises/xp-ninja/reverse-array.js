// Exercise 4: Reverse Array
// Write a function called reverseArray which accepts an array and returns the array with all values reversed.
// See if you can do this without creating a new array!

function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(reverseArray(arr));