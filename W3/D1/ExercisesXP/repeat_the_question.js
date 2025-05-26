/*
 🌟 Exercise 3 : Repeat the question
 Instructions
 Prompt the user for a number.
 Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

 While the number is smaller than 10 continue asking the user for a new number.
 Tip : Which while loop is more relevant for this situation?
 */

let number;

do {
    number = prompt("Please enter a number:");
    number = Number(number); // convert string to number

    if (isNaN(number)) { // if the input was not a number
        alert("That's not a valid number. Try again.");
    }
} while (isNaN(number) || number < 10); // if the input is not a number or is less than 10, repeat the loop.

console.log("You entered a number greater than or equal to 10:", number);