/*
Exercise 3: Counter class
Analyze the code below, what will be the output?
*/

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment(); // 0 -> 1
counterOne.increment(); // 1 -> 2

const counterTwo = counterOne;
counterTwo.increment(); // 2 -> 3

console.log(counterOne.count); // 3; because it is passed by reference