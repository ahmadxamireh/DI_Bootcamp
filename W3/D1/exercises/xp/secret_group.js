/*
 Exercise 7: Secret Group
 Instructions
 const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of
 their names sorted in alphabetical order.
 Hint: a string is an array of letters
 2. Console.log the name of their secret society. The output should be “ABJKPS”
 */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secret_name = "";

for (let name of names) {
    secret_name += name[0];
}
/*
 .split("") returns a string array of the 'secret_name' characters
 .sort() sorts the array created by .split in ascending order by default
 .join("") joins the characters from the array in one string with no spaces
 */
let secret_name_sorted = secret_name.split("").sort().join("");
console.log(secret_name_sorted);
