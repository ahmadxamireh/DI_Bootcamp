/*
Exercise 6 : Regular Expression #2
Ask the user for his full name (example: “John Doe”), and use the regular expression module to check the validity of his answer:
The name should contain only letters.
The name should contain only one space.
The first letter of each name should be upper-cased.
*/

import inquirer from "inquirer";

const regex = /^[A-Z][A-Za-z]+ [A-Z][A-Za-z]+$/;

inquirer.prompt([
    {type: "input", name: 'userName', message: 'Enter your full name (ex: John Doe)'}
]).then(answers => {
    console.log(regex.test(answers.userName));
}).catch(err => console.log(err));

