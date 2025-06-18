/*
Optional Exercise: JavaScript Logic

What is the Challenge?
Solve the below 3 JavaScript puzzles. The goal of this challenge is to practice our logic skills.
Something that is useful not only in interviews when you get challenging problems, but also in your day-to-day work as a developer.

Question 1:

Clean the room function:
Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into an individual array that is ordered.
For example, answer(ArrayFromAbove) should return: [[1,1,1,1], [2,2,2], 4, 5, 10, [20,20], 391, 392, 591].
Bonus: Make it so it organizes strings differently from number types. I.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
 */

function arrayOrganizer(arr) {

    const numArr = arr.filter(x => typeof x === "number");
    const strArr = arr.filter(x => typeof x === "string");

    function groupElements(arr) {

        let organizedObj = {}; // to store arrays of each element or group of elements in the array

        for (let i = 0; i < arr.length; i++) {
            if (Object.keys(organizedObj).includes(String(arr[i]))) {
                organizedObj[arr[i]].push(arr[i]);
            } else {
                organizedObj[arr[i]] = [arr[i]];
            }
        }
        // if the element array has one item only, convert it to a plain element instead.
        return Object.values(organizedObj).map(arr => arr.length === 1 ? arr[0] : arr);
    }

    const groupedNums = groupElements(numArr.sort((a, b) => a - b));
    const groupedStrs = groupElements(strArr.sort())
    const result = [];
    if (groupedNums.length > 0) result.push(groupedNums);
    if (groupedStrs.length > 0) result.push(groupedStrs);
    return result.length === 1 ? result[0] : result;
}

console.log(arrayOrganizer([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
// expected: [ [ 1, 1, 1, 1 ], [ 2, 2, 2 ], 4, 5, 10, [ 20, 20 ], 391, 392, 591 ]

console.log(arrayOrganizer([1, 2, 4, "2", "3", 2, 5, 1, "2", 1]));
// expected: [ [ [ 1, 1, 1 ], [ 2, 2 ], 4, 5 ], [ [ '2', '2' ], '3' ] ]

console.log(arrayOrganizer([1, "2", "3", 2]))
// expected: [ [ 1, 2 ], [ '2', '3' ] ]

console.log(arrayOrganizer(["d", "a", "e", "b", "c", "e", "a", "b"]));
// expected: [["a", "a"], ["b", "b"], "c", "d", ["e", "e"]]

console.log(arrayOrganizer([]))
// expected: []

/*
Question 2:

Write a JavaScript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4) should return [1,3]
 */

function findSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null; // no match found
}

console.log(findSum([1, 2, 3], 4)); // [1, 3]
console.log(findSum([5, 7, 1, 2], 8)); // [7, 1]
console.log(findSum([1, 1, 1], 3)); // null

/*
Question 3:

Write a function that converts HEX to RGB.
Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB,
and if you enter an RGB color format, it returns HEX.
 */

function convertColor(input) {
    input = input.trim();

    // HEX to RGB
    if (input.startsWith("#") || /^[0-9A-Fa-f]{6}$/.test(input)) {
        const hex = input.replace("#", "");
        if (hex.length !== 6) return null;

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `rgb(${r}, ${g}, ${b})`;
    }

    // RGB to HEX
    if (input.startsWith("rgb")) {
        const match = input.match(/\d+/g);
        if (!match || match.length !== 3) return null;

        const hex = match.map(num => {
            const h = parseInt(num).toString(16);
            return h.length === 1 ? "0" + h : h;
        }).join("");

        return `#${hex}`;
    }

    return null; // Unrecognised format
}

console.log(convertColor("#FF0000")); // → rgb(255, 0, 0)
console.log(convertColor("rgb(255, 0, 0)")); // → #ff0000
console.log(convertColor("00FF00")); // → rgb(0, 255, 0)