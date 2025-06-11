// Exercise 1: print Full Name
// Create a function called printFullName.
// The function should return a string like the example below
// 'Your full name is Elie Schoppik`
//
// Destructure this object directly from the parameters

function printFullName({first, last}) {
    console.log(`Your full name is ${first} ${last}`);
}

printFullName({first: 'Elie', last: 'Schoppik'})
