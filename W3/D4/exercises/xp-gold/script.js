/*
Exercise 1: Nested functions
1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
2. Change the code below to nested arrow functions.
 */

let landscape = function () {

    let result = "";

    let flat = function (x) {
        for (let count = 0; count < x; count++) {
            result = result + "_";
        }
    }

    let mountain = function (x) {
        result = result + "/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4); // result = "____"
    mountain(4); // result = "____/''''\"
    flat(4) // result = "____/''''\____"

    return result; // "____/''''\____"
}

landscape()

/*
Answer:
The final outcome of the function is "____/''''\____", after running the 2 inner functions
each concatenating to the result variable.
 */
// shortened with nested arrow functions:
let nestedLandscape = () => {

    let result = "";
    let flat = x => result += "_".repeat(x);
    let mountain = x => result += "/" + "'".repeat(x) + "\\";

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

console.log(nestedLandscape())

/*
Exercise 2: Closure
Analyze the code below, and before executing it, predict the outcome of the last line.
 */

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

/*
Answer:
The answer is 13.
addTo(10) returns a function y => 10 + y (x becomes 10).
addToTen(3) is equal to that function (line 2), so: 10 + 3 = 13
 */

/*
Exercise 3: Currying
Analyze the code below, and before executing it, predict the outcome of the last line.
 */

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

/*
Answer:
Currying transforms a function that takes multiple arguments into a series of functions, each taking one argument.
(a, b) => a + b becomes a => b => a + b.
curriedSum returns a function b => 30 + b
then at b = 1, 30 + 1 = 31
 */

/*
Exercise 4: Currying
Analyze the code below, and before executing it, predict the outcome of the last line.
 */

const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12)

/*
Answer:
curriedSum2 returns a function b => 5 + b
then at b = 12, 5 + 12 = 17
 */

/*
Exercise 5: Composing
Analyze the code below, and before executing it, predict the outcome of the last line.
 */

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5_ = (num) => num + 5;
compose(add1, add5_)(10)

/*
Answer:
a = 10
f = num => num + 1
g = num => num + 5
g(a) = g(10) = 10 + 5 = 15
f(g(a)) = f(15) = 15 + 1 = 16
compose = 16
 */