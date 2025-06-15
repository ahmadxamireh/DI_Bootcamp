/*
Exercise 1: Union Types
1. Create the Function:
    - Write a function called processValue that accepts one parameter of type string | number.
    - If the input is a number, format it as a currency string (e.g., $100.00).
    - If the input is a string, return the reversed version of the string.
2. Test the Function:
    - Call the processValue function with different inputs (both strings and numbers) to verify functionality.
 */

function processValue(param: string | number): string {
    if (typeof param === "string") return param.split("").reverse().join("")
    return `$${param.toFixed(2)}`
}

console.log(processValue(100))
console.log(processValue("hello"))

/*
Exercise 2: Array Type Annotations
1. Create the Function:
    - Write a function named sumNumbersInArray that accepts an array of number | string.
    - Iterate through the array and sum only the number values, ignoring strings.
2. Test the Function:
    - Test sumNumbersInArray with different arrays containing both numbers and strings.
 */

function sumNumbersInArray(arr: (number | string)[]): number {
    const sum = arr.reduce((acc: number, curr) => typeof curr === "number" ? acc + curr : acc, 0);
    return sum;
}

console.log(sumNumbersInArray([1, "2", 3, "hello", 4])); // 8
console.log(sumNumbersInArray(["a", "b", "c"])); // 0
console.log(sumNumbersInArray([10, 20, "30", "forty"])); // 30
console.log(sumNumbersInArray([])); // 0

/*
Exercise 3: Type Aliases
1. Define a Type Alias:
    - Create a type alias called AdvancedUser that represents a user object with the properties:
    name, age, and an optional address.
2. Implement the Function:
    - Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the
      user’s name and age.
    - If the address property is present, include it in the greeting message.
3. Test the Function:
    - Test introduceAdvancedUser with and without the address property.
 */

type AdvancedUser = {
    name: string,
    age: number,
    address?: string
};

function introduceAdvancedUser(user: AdvancedUser): string {
    return typeof user.address === "undefined" ?
        `Greetings ${user.name}, you are ${user.age} years old.` :
        `Greetings ${user.name} from ${user.address}, you are ${user.age} years old.`
}

console.log(introduceAdvancedUser({name: "Ahmad", age: 28, address: "Jerusalem"}))
console.log(introduceAdvancedUser({name: "Ahmad", age: 28}))

/*
Exercise 4: Optional Parameters
1. Create the Function:
    - Write a function welcomeUser that takes a required name and an optional greeting.
    - If no greeting is provided, use "Hello" as the default.
2. Test the Function:
    - Test welcomeUser with and without a custom greeting.
 */

function welcomeUser(name: string, greeting?: string) {
    return typeof greeting === "undefined" ?
        `Hello, ${name}.` :
        `${greeting}, ${name}.`
}

console.log(welcomeUser("Ahmad", "Hi"))
console.log(welcomeUser("Ahmad"))