// Exercise 3: Employees #3
// Using this array

const users = [
    {firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident'},
    {firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident'},
    {firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor'},
    {firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor'},
    {firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident'},
    {firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    {firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// Change the structure of the users array.
// The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.

const updatedUsers = []

for (let user of users) {
    let userObj = {};
    userObj[`${user.firstName} ${user.lastName}`] = user.role;
    updatedUsers.push(userObj);
}
console.log(updatedUsers)