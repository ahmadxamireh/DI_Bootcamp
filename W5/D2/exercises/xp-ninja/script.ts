/*
Exercise 1: Conditional Types
1. Define a Conditional Type:
    - Create a type called MappedType that maps an input type to an output type.
    - If the input is a number, the output should be a number.
    - If the input is a string, the output should also be a number (in this case, the length of the string).
2. Implement the Function:
    - Write a function called mapType that takes a value of type number or string and returns a result based on the input type.
    - If the input is a number, return the square of the value.
    - If the input is a string, return the length of the string.
3. Test the Function:
    - Test the mapType function with both number and string inputs to ensure it returns the correct results.
*/

/*
Explanation:
If T is number, it should be number.
If T is string, it should also be number (e.g., representing the string’s length).
If T is something else, it could be never or another default.
*/
type MappedType<T> = T extends number ? number : T extends string ? number : never;

function mapType<T extends number | string>(value: T): MappedType<T> {
    if (typeof value === "number") {
        return (value * value) as MappedType<T>;
    } else if (typeof value === "string") {
        return value.length as MappedType<T>;
    }
    // Optional fallback (shouldn't be reached due to type constraint)
    throw new Error("Unsupported type");
}

console.log(mapType(5));
console.log(mapType("hello"));

/*
Exercise 2: Keyof and Lookup Types
1. Define the Function:
    - Create a function named getProperty that accepts two parameters:
    - An object that contains various properties.
    - A key which represents one of the properties in the object.
    - The function should return the value of the property associated with the given key.
2. Ensure Type Safety:
    - Use TypeScript’s keyof to ensure that the key provided is valid for the object.
    - Use lookup types to ensure that the return type matches the type of the property.
3. Test the Function:
    - Test the getProperty function with an object, passing different keys to retrieve different property values.
 */

/*
Explanation:
T is the type of the object.
K is constrained to the keys of T (keyof T).
T[K] ensures the return type matches the value of the specific property.
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

// test
const user = {
    id: 1,
    name: "Ahmad",
    isActive: true,
};

console.log(getProperty(user, "id"))
console.log(getProperty(user, "name"))
console.log(getProperty(user, "isActive"))

// will return undefined -> will throw a compile-time error, because "testKey" is not a valid key of the user object.
// console.log(getProperty(user, "testKey"))

/*
Exercise 3: Using Interfaces with Numeric Properties in TypeScript
1. Define an Interface:
    - Create an interface named HasNumericProperty that describes objects with properties that have numeric values.
2. Implement the Function:
    - Write a function named multiplyProperty that takes three parameters:
    - An object that adheres to the HasNumericProperty interface.
    - A string key that corresponds to one of the numeric properties in the object.
    - A numeric factor by which to multiply the property’s value.
    - The function should return the result of multiplying the specified property’s value by the given factor.
3. Test the Function:
    - Test the multiplyProperty function with different objects and keys to ensure it works as expected.
*/

interface HasNumericProperty {
    [key: string]: number; // any property (key) must be a string, and its value must be a number.
}

function multiplyProperty<T extends HasNumericProperty, K extends keyof T>(obj: T, key: K, factor: number): number {
    return obj[key] * factor;
}

const product = {
    price: 100,
    tax: 0.2,
    discount: 10,
};

const x = multiplyProperty(product, "price", 2); // 200
const y = multiplyProperty(product, "stock", 2); // error at compile time

console.log(x)
console.log(y) // NaN