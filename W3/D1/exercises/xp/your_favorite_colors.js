/*
 🌟 Exercise 2 : Your favorite colors
 Instructions
 Create an array called colors where the value is a list of your five favorite colors.
 Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
 Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
 Hint : create an array of suffixes to do the Bonus
 */

const colors = ["blue", "red", "green", "yellow", "orange"];

for (let i = 0; i < colors.length; i++) {
    let suffix = ""
    if (i === 0) {
        suffix = "st"
    } else if (i === 1) {
        suffix = "nd"
    } else if (i === 2) {
        suffix = "rd"
    } else {
        suffix = "th"
    }
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}
