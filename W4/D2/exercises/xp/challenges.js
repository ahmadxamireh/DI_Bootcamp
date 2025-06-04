// 🌟 Exercise 6: Challenges

// 1. Evaluate these (i.e., True or False)

// [2] === [2]
// {} === {}
console.log('Both of the above will evaluate to false; because JS compares objects by reference and not by value.' +
    ' While each of the objects look the exact same, they point to a different location in memory.')

// ----------------------------------------------------------------------------------------------
// 2. What is, for each object below, the value of the property number and why?

const object1 = {number: 5};
console.log('The value of number is 5; because it is inside a key-value object.')

const object2 = object1;
console.log('The value of number is also 5; because object2 points to the location of object1 in memory.')

const object3 = object2;
console.log('The value of number is also 5; because object3 points to the location of object2 which points to' +
    ' the location of Object in memory')

const object4 = {number: 5};
console.log('The value of number is 5; because it is inside a key-value object.')


object1.number = 4;
console.log('The value of number is 4; because object1.number is being changed to 4.')
console.log(object2.number)
console.log('The value of number is now 4; because object2.number is pointing to the same location as object1.number')
console.log(object3.number)
console.log('The value of number is still 4; because object3.number is pointing to the same location as object2.number')
console.log(object4.number)
console.log('The value of number is still 5; because object4.number is independent of object1.number.')

// ----------------------------------------------------------------------------------------------
// 3. Create a class Animal with the attributes: name, type and color.
// The type is the animal type, for example, dog, cat, dolphin, etc …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mammal that extends from the Animal class.
// Inside the class, add a method called sound().
// This method takes a parameter: the sound the animal makes,
// and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(param) {
        return `${param} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`;
    }
}

// Create a farmerCow object that is an instance of the class Mammal.
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example, Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));