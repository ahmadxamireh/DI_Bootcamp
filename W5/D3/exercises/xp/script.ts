/*
🌟 Exercise 1: Class with Access Modifiers
1. Create a class Employee with the following properties:
    - A private property name of type string.
    - A private property salary of type number.
    - A public property position of type string.
    - A protected property department of type string.
2. Also, include a constructor to initialize these properties.
3. Create a public method getEmployeeInfo that returns the employee’s name and position.
 */

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `${this.name} works as ${this.position}.`;
    }
}

/*
🌟 Exercise 2: Readonly Properties in a Class
1. Create a class Product with the following properties:
    - A readonly property id of type number.
    - A public property name of type string.
    - A public property price of type number.
2. Create a method getProductInfo that returns a string with the product’s name and price.
3. Attempt to modify the id property after creating a new instance of the class and observe the result.
 */

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `${this.name} costs ${this.price}.`;
    }
}

let apple = new Product(123, "Apple", 10)
apple.id = 456;
/*
Observation:
- compile-time error: Cannot assign to id because it is a read-only property.
- readonly in TypeScript only exists at compile-time.
- It does not prevent changes at runtime in JavaScript.
 */

/*
🌟 Exercise 3: Class Inheritance
1. Create a base class Animal with a public property name, and a method makeSound that returns a string.
2. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”).
3. Create an instance of the Dog class and call the makeSound method.
 */

abstract class Animal {
    constructor(public name: string) {
    }

    abstract makeSound(): string;
}

class Dog extends Animal {
    sound: string;

    constructor(name: string, sound: string) {
        super(name);
        this.sound = sound
    }

    makeSound(): string {
        return `${this.sound}`;
    }
}

let dog = new Dog("Milo", "Woff");
console.log(dog.makeSound())

/*
🌟 Exercise 4: Static Properties and Methods
1. Create a class Calculator with the following static methods:
    - add(a: number, b: number): number – returns the sum of two numbers.
    - subtract(a: number, b: number): number – returns the difference between two numbers.
2. Call these methods without creating an instance of the class.
 */

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(1, 2))
console.log(Calculator.subtract(1, 2))

/*
🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties
1. Create an interface User with properties id (readonly), name, and email.
2. Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel.
3. Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.
 */

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: number;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`name: ${user.name}; ID number: ${user.id}; email: ${user.email};` +
        (user.membershipLevel !== undefined ? ` membership level: ${user.membershipLevel}.` : ''));
}

const regularUser: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

const premiumUser: PremiumUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    membershipLevel: 3
};

printUserDetails(regularUser);
printUserDetails(premiumUser);