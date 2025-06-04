// 🌟 Exercise 1: Scope
// Instructions
// Analyze the code below and predict what will be the value of 'a' in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared with const instead of let?

/*
Answer:
The variable 'a' is defined inside the function, so it is a function scope.
It gets modified inside an if block, which is inside the function too.
The final value of 'a' will be 3.
If we change 'let' to 'const' we will get an error because we cannot modify constants.
 */
// --------------------------------------------------------------------------------
// #2
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared with const instead of let?

/*
Answer:
Variable 'a' is declared globally, so both functions have access to it.
Running funcThree() will return the value of 'a' which is 0.
Running funcTwo() will modify the value of 'a' to become 5.
Running funcThree() again will return the value of 'a' which is now 5.
If we change 'let' to 'const' we will get an error because we cannot modify constants.
 */
// --------------------------------------------------------------------------------
// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

/*
Answer:
funcFour() creates a global value 'a' by using the 'window' special key.
funcFive() uses the newly created 'a' value and shows it.
 */
// --------------------------------------------------------------------------------
// #4
let a = 1;

function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared with const instead of let?

/*
Answer:
The first 'a' is declared globally and equals 1.
The second 'a' is declared locally within the function and equals 'test'.
alert() prioritizes the local 'a' in the function.
Changing 'let' to 'const' will not have an effect because we are not reassigning.
 */
// --------------------------------------------------------------------------------
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let?

/*
Answer:
The first 'a' is declared globally and equals 2.
The second 'a' is declared locally within the if block and equals 5.
Since the condition is true, the if block will be executed first, displaying an alert with a = 5.
Then, the second alert executes displaying a = 2.
Changing 'let' to 'const' will not have an effect because we are not reassigning.
 */