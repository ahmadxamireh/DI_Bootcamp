// Exercise 3: You said string?
// Write a JavaScript function to find a word within a string.

function searchWord(str, target) {
    const words = str.split(" ");
    const filtered =  words.filter(word => word.toLowerCase() === target.toLowerCase());
    if (filtered.length > 0) {
        return `'${target}' was found ${filtered.length} times.`;
    } else {
        return `'${target}' was not found.`;
    }
}

console.log(searchWord('The quick brown fox', 'fox'));