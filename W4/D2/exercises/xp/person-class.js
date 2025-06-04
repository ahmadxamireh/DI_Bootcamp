// Exercise 4: Person class
// Instructions
// Analyze the code below. What will be the output?

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

console.log('typeof member will return an object because in JavaScript all class instances are of the object type.')
