// Exercise 2: Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
    const nameArr = name.trim().split(' ');
    if (nameArr.length < 2) return nameArr[0]; // fallback if only one word
    return `${nameArr[0]} ${nameArr[1][0]}.`;
}

console.log(abbrevName("Robin Singh"));