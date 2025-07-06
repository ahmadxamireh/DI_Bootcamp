import {faker} from '@faker-js/faker';

// Create an empty array called users. Tip: It’s an array of objects

let users = [];

// Create a function that adds objects to the users array.
function addUser(user) {
    users.push(user);
}

// Each user has the properties: name, address street and country.
function createRandUser() {
    return {
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        country: faker.location.country()
    }
}

// Use faker to populate them with fake data.
let i = 0;
while (i < 10) {
    addUser(createRandUser());
    i++;
}

console.log(users)

// Bonus : Find a node module that allows to prompt the user for his name, address street and country
// in order to add this information into the users array.

import inquirer from "inquirer";

inquirer.prompt([
    {type: 'input', name: 'name', message: 'Enter your name:'},
    {type: 'input', name: 'street', message: 'Enter your street address:'},
    {type: 'input', name: 'country', message: 'Enter your country:'}
]).then(answers => {
    users.push({name: answers.name, street: answers.street, country: answers.country});
    console.log('User added:', answers);
});