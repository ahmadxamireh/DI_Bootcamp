// Exercise 2 : Attendance
// Instructions

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// Given the object above where the key is the student’s name and the value is the country they are from.
//
// 1. Prompt the student for their name.

const name = prompt('What is your name? ')

// 2. If the name is in the object, console.log the name of the student and the country they come from.
// For example, "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in
// 3. If the name is not in the object, console.log: "Hi! I'm a guest."

const lowerName = name.toLowerCase();

if (lowerName in guestList) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[lowerName]}.`)
} else {
    console.log("Hi! I'm a guest.")
}

