/*
🌟 Exercise 1: Intersection Types
Define an intersection type PersonWithAddress that combines Person and Address types.
Create a variable of this type with properties from both types.
The Person type should contain name and age, the Address type should contain street and city,
 */

type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const person: PersonWithAddress = {
    name: "Ahmad",
    age: 28,
    street: "123 XC",
    city: "Jerusalem"
};

/*
🌟 Exercise 2: Type Guards with Union Types
Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:
"This is a number" for numbers.
"This is a string" for strings.
 */

function describeValue(val: number | string): string {
    if (typeof val === "number") {
        return "This is a number";
    } else if (typeof val === "string") {
        return "This is a string";
    }
    return "Unknown type";
}

console.log(describeValue(7))
console.log(describeValue("Hi"))

/*
🌟 Exercise 3: Type Casting
Create a variable someValue of type any and cast it to a string. Then, use it as a string.
 */

let someValue: any = "Hello World";
let length1: number = (someValue as string).length;
let length2: number = (<string>someValue).length;
console.log(length1);
console.log(length2);

/*
🌟 Exercise 4: Type Assertions with Union Types
Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string.
Test with arrays of mixed types.
 */

// (number | string)[] : An array where each item can be either a number or a string.
function getFirstElement(arr: (number | string)[]): string {
    if (arr.length === 0) return "Empty array";
    const firstElement = arr[0];
    return typeof firstElement === "string" ? firstElement : String(firstElement);
}

console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([123, "world"]));
console.log(getFirstElement([]));

/*
🌟 Exercise 5: Generic Constraints
Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array).
The function should log the length.
 */

// T extends { length: number }: This means T can be any type that has a .length property.
function logLength<T extends { length: number }>(arg: T): number {
    console.log(arg.length);
}

logLength("Hello");
logLength([1, 2, 3]);
logLength({length: 10});

/*
🌟 Exercise 6: Intersection Types and Type Guards
Define a type Employee that combines Person and Job using intersection types.
Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.
    - Person type: name: string; age: number;
    - Job type: position: string; department: string;
    - Employee type should combine these.
    - describeEmployee should return a specific message for each type of job.
 */

type Person = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is the Manager`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is the Developer`;
    } else {
        return `${employee.name} is not the Manager or the Developer`;
    }
}

const dev: Employee = {
    name: "Ahmad",
    age: 28,
    position: "Developer",
    department: "Engineering"
};

const mgr: Employee = {
    name: "Layla",
    age: 35,
    position: "Manager",
    department: "HR"
};

console.log(describeEmployee(dev));
console.log(describeEmployee(mgr));

/*
🌟 Exercise 7: Type Assertions and Generic Constraints
Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method.
Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.
 */

function formatInput<T extends { toString(): string }>(input: T): string {
    return input.toString().toUpperCase();
}

console.log(formatInput("hello"));
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput(["a", "b"]));