/*
🌟 Exercise 1: Hello, World! Program
Create a TypeScript program that logs the message “Hello, World!” to the console.
*/

let message: string = "Hello, World!";
console.log(message);

/*
🌟 Exercise 2: Type Annotations
Define a variable age of type number and a variable name of type string, and log them to the console.
 */

let age: number = 28;
let name: string = "Ahmad";
console.log(`My name is ${name} and I'm ${age} years old.`);

/*
🌟 Exercise 3: Union Types
Use union types to declare a variable id that can be either a string or a number.
 */

let id: string | number;

/*
🌟 Exercise 4: Control Flow with if...else
Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
Use if...else statements to control the flow of a program.
 */

function checkNumber(num: number): string {
    if (num > 0) return `${num} is a positive number.`;
    else if (num < 0) return `${num} is a negative number.`;
    return `${num} is a zero.`;
}

console.log(checkNumber(9));
console.log(checkNumber(0));
console.log(checkNumber(-7));

/*
🌟 Exercise 5: Tuple Types
Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
The tuple should contain multiple values of different types.
 */

function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`]
}

console.log(getDetails("Alice", 25));

/*
🌟 Exercise 6: Object Type Annotations
1. Define the Object Structure:
    - Create an object type annotation that defines the shape of a Person object.
    - The object should have two properties: name (a string) and age (a number).
2. Create the Function:
    - Write a function named createPerson that takes two parameters: name (string) and age (number).
    - The function should return an object that matches the Person structure.
3. Test the Function:
    - Test the createPerson function by creating a person and logging the result to the console.
 */

type Person = {
    name: string,
    age: number
};

function createPerson(name: string, age: number): Person {
    return {name, age}
}

const person = createPerson("Ahmad", 28);
console.log(person);

/*
🌟 Exercise 7: Type Assertions
1. Get an Element from the DOM:
    - Use document.getElementById() to retrieve an HTML element from the DOM.
2. Use Type Assertion:
    - Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
3. Access the Element’s Properties:
    - Once cast, use the properties of the specific element type, like setting the value of an input element.
4. Test the Functionality:
    - Ensure that you can successfully set or manipulate a property of the element.
 */

const el = document.getElementById("element") as HTMLInputElement | null;
if (el) { // null check
  el.value = "Hello, world!";
}

/*
🌟 Exercise 8: switch Statement with Complex Conditions
Create a function getAction that takes a string representing a user role and returns an action for the user.
Use a switch statement with complex conditions to handle multiple roles.
 */

function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

/*
🌟 Exercise 9: Function Overloading with Default Parameters
Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
 */

function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (typeof name === "undefined" || name === "") return "Hello, stranger!"
    return `Hello, ${name}!`
}

console.log(greet())
console.log(greet("Ahmad"))
console.log(greet(""))