/*
Exercise 1: Random Number
1. Get a random number between 1 and 100.
2. Console.log all even numbers from 0 to the random number.
 */

const randNum = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= randNum; i += 2) { // +2 to only process even numbers
    console.log(i)
}

/*
Exercise 2: Capitalized letters
1. Create a function that takes a string as an argument.
2. Have the function return:
    - The string but all letters in even indexes should be capitalized.
    - The string but all letters in odd indexes should be capitalized.
Notes:
    - Index 0 will be considered even.
    - The argument of the function should be a lowercase string with no spaces.
Example:
capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
 */

function capitalize(str) {
    let capAtEven = '', capAtOdd = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            capAtEven += str[i].toUpperCase();
            capAtOdd += str[i].toLowerCase();
        } else {
            capAtEven += str[i].toLowerCase();
            capAtOdd += str[i].toUpperCase();
        }
    }
    return [capAtEven, capAtOdd];
}

console.log(capitalize("abcdef")) // [ 'AbCdEf', 'aBcDeF' ]

/*
Exercise 3: Is palindrome?
Write a JavaScript function that checks whether a string is a palindrome or not.
Note: A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward.
Example, madam, bob or kayak.
 */

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome("madam")) // true
console.log(isPalindrome("Kayak")) // true
console.log(isPalindrome("Hello")) // false

/*
Exercise 4: Biggest Number
Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note: This function should work with any array.
 */

function biggestNumberInArray(arrayNumber) {
    return arrayNumber.reduce((a, b) => {
        if (a > b) return a;
        return b;
    }, 0);
}

console.log(biggestNumberInArray([1, 2, 3, 4, 5])); // 5
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0

/*
Exercise 5: Unique Elements
Write a JS function that takes an array and returns a new array with only unique elements.
 */

function uniqueList(lst) {
    return [...new Set(lst)]; // using spread operator inside an array, or: Array.from(new Set(lst));
}

console.log(uniqueList([1,2,3,3,3,3,4,5]))
console.log(uniqueList(['a','a','b','c','c','d']))