/*
Exercise 1: Class Inheritance with Protected Access Modifiers
1. Create a base class Employee with the following:
    - A protected property name of type string.
    - A protected property salary of type number.
    - A method getDetails() that returns the employee’s name and salary.
2. Then create a derived class Manager that:
    - Inherits from Employee.
    - Adds a public property department of type string.
    - Overrides the getDetails() method to include the department information.
3. Finally, create a new instance of the Manager class and call the getDetails() method.
 */

class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string {
        return `${this.name}'s salary is ${this.salary}.`;
    }
}

class Manager extends Employee {
    public department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getDetails(): string {
        return super.getDetails() + ` Works at ${this.department} department.`;
    }
}

let manager = new Manager("Ahmad", 18_000, "R&D")
console.log(manager.getDetails())

/*
Exercise 2: Using Readonly with Access Modifiers
1. Create a class Car with the following properties:
    - A readonly and public property make of type string.
    - A readonly and private property model of type string.
    - A public property year of type number.
2. Create a method getCarDetails() that returns the make, model, and year of the car.
3. Attempt to modify the make and model properties after the car is instantiated, and observe the results.
 */

class Car {
    readonly make: string;
    private readonly model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarDetails(): string {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

let bmw = new Car("BMW", "M4", 2025)
bmw.make = "bmw"; // error: cannot assign to 'make' because it is a read-only property.
bmw.model = "m4"; // error: property 'model' is private and only accessible within class 'Car'.

/*
Exercise 3: Static Properties and Methods in Classes
1. Create a class MathUtils with:
    - A static property PI with a value of 3.14159.
    - A static method circumference(radius: number) that returns the circumference of a circle given its radius.
2. Use the PI static property inside the circumference method.
3. Call the method without creating an instance of MathUtils.
 */

class MathUtils {
    static PI: number = 3.14159;

    static circumference(radius: number): number {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtils.circumference(4))

/*
Exercise 4: Interface with Function Types
1. Create an interface Operation with a function type that takes two numbers and returns a number.
2. Create two classes Addition and Multiplication, both implementing the Operation interface.
3. Each class should define the function to perform the respective operation.
4. Create instances of both classes and use them to perform operations on two numbers.
 */

interface Operation {
    (a: number, b: number): number;
}

class Addition implements Operation {
    operation(a: number, b: number): number {
        return a + b;
    }
}

class Multiplication implements Operation {
    operation(a: number, b: number): number {
        return a * b;
    }
}

let add = new Addition()
console.log(add.operation(3, 4))

let mult = new Multiplication()
console.log(mult.operation(3, 4));

/*
Exercise 5: Extending Interfaces with Optional and Readonly Properties
1. Create an interface Shape with a property color of type string and a method getArea().
2. Extend the interface with a new interface Rectangle that adds properties width and height (both readonly) and a method getPerimeter().
3. Implement the Rectangle interface in a class and provide implementations for the methods.
 */

interface Shape {
    color: string;

    getArea(): number;
}

interface Rectangle extends Shape {
    readonly width: number;
    readonly height: number;

    getPerimeter(): number;
}

class Square implements Rectangle {
    readonly width: number;
    readonly height: number;
    color: string;

    constructor(side: number, color: string = "blue") {
        this.width = side;
        this.height = side;
        this.color = color;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let square = new Square(5);
console.log(square.getArea())
console.log(square.getPerimeter())