/*
Exercise 1: Bird class
Analyze the code below, what will be the output?
*/

class Bird {
    constructor() {
        console.log("I'm a bird. 🦢");
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();

/*
Answer:

A new Flamingo object is created that also inherits from the Bird class.
"I'm pink. 🌸" is logged to the console first.
super() calls the constructor in the parent class, logging "I'm a bird. 🦢" to the console.
 */