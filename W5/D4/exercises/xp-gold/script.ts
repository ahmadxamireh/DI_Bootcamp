/*
Exercise 1: Combining Intersection Types with Type Guards
In this exercise, you’ll combine two interfaces using an intersection type and use type guards to handle different property types safely.
1. Define Interfaces: Create two interfaces, User and Admin.
   The User interface should have name and email properties, while Admin should have an adminLevel property.
2. Combine Interfaces: Use an intersection type to create a new type AdminUser that combines both User and Admin.
3. Write a function getProperty that takes an object of type AdminUser and a string property name.
   Use a type guard to check if the property exists on the object and return its value. If the property does not exist, return undefined.
 */

interface User {
    name: string;
    email: string;
}

interface Admin {
    adminLevel: number;
}

type AdminUser = User & Admin;

function getProperty(user: AdminUser, property: string): string | number | undefined {
    if (property in user) return user[property as keyof AdminUser];
    return undefined;
}

// test data

const admin: AdminUser = {
    name: "Ahmad",
    email: "ahmad@example.com",
    adminLevel: 2
};

console.log(getProperty(admin, "name")); // "Ahmad"
console.log(getProperty(admin, "adminLevel")); // 2
console.log(getProperty(admin, "email")); // "ahmad@example.com"
console.log(getProperty(admin, "unknown")); // undefined

/*
Exercise 2: Type Casting with Generics
In this exercise, you’ll create a generic function that uses type casting to convert values to different types.
1. Write a generic function castToType that takes a value and a constructor function for the type to cast to.
   The function should cast the value to the specified type and return it.
2. Use this function to cast a string to a number and a string to a boolean, demonstrating how type casting can be used with generics.
 */

function castToType<T>(value: any, constructor: (args: any) => T): T {
    return constructor(value);
}

console.log(castToType(123, String));
console.log(castToType("true", Boolean));

/*
Exercise 3: Type Assertions with Generic Constraints
In this exercise, you’ll create a generic function that returns the length of an array.
You’ll use type assertions and generic constraints to ensure type safety.
1. Create a generic function getArrayLength that takes an array of items and returns its length.
   Apply constraints to ensure the function only works with arrays of numbers or strings.
2. Use the function with different types of arrays to demonstrate its functionality.
 */

function getArrayLength<T extends string | number>(array: T[]): number {
    return array.length;
}

console.log(getArrayLength([1, 2, 3, 4]));
console.log(getArrayLength(['a', 'b', 'c']));
console.log(getArrayLength(['a', 2, 'c', 4]));
console.log(getArrayLength([]));
// console.log(getArrayLength([true, false])); // boolean not allowed
// console.log(getArrayLength([{ name: "Ahmad" }])); // object not allowed

/*
Exercise 4: Generic Interfaces with Class Implementation
In this exercise, you’ll define a generic interface and implement it in a class.
1. Create a generic interface Storage<T> with methods add and get.
    - add should add an item of type T, and get should retrieve an item by index.
2. Implement the Storage<T> interface in a class Box. The class should manage an internal array to store items.
3. Instantiate the class with different types and test the add and get methods.
 */

interface MyStorage<T> {
    add(item: T): void;

    get(index: number): T | undefined;
}

class Box<T> implements MyStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T | undefined {
        return this.items[index];
    }
}

// test data

const numberBox = new Box<number>();
numberBox.add(10);
numberBox.add(20);
console.log(numberBox.get(0)); // 10
console.log(numberBox.get(2)); // undefined

const stringBox = new Box<string>();
stringBox.add("apple");
stringBox.add("banana");
console.log(stringBox.get(0)); // apple
console.log(stringBox.get(1)); // banana

/*
Exercise 5: Combining Generic Classes with Constraints
In this exercise, you’ll create a generic class with constraints to ensure it only accepts objects with a value property.
1. Create an interface Item<T> with a value property of type T.
2. Implement a class Queue<T> that manages a collection of Item<T>.
   The class should have methods add and remove for managing items in the queue.
3. Instantiate the class with different types and test the add and remove methods.
 */

interface Item<T> {
    value: T;
}

// T extends Item<any> : ensures each item has a .value property
class Queue<T extends Item<any>> {
    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.shift();
    }
}

const stringQueue = new Queue<Item<string>>();
stringQueue.add({ value: "hello" });
stringQueue.add({ value: "world" });

console.log(stringQueue.remove()); // { value: "hello" }
console.log(stringQueue.remove()); // { value: "world" }

const numberQueue = new Queue<Item<number>>();
numberQueue.add({ value: 10 });
console.log(numberQueue.remove()); // { value: 10 }