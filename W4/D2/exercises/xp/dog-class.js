// 🌟 Exercise 5: Dog class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// }

console.log('Option 1 does not use the super() keyword to call the super class constructor.')

// 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// }

console.log('Option 2 is correct because it extends the Dog class and calls the super class constructor with the name parameter.')

// 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// }

console.log('Option 3 does not have the name parameter in the constructor, so it will not work. It will throw a ReferenceError.')

// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }

console.log('Option 4 is incorrect because it does not use the super() keyword to call the super class constructor.')