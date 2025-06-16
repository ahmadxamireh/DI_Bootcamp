/*
Exercise 1: Advanced Access Modifiers and Inheritance
1. Create a base class Employee with the following properties:
    - name (public), age (private), and salary (protected).
    - Include a protected method calculateBonus that calculates a bonus based on the salary.
2. Now create a class Manager that extends Employee and overrides a method getSalaryDetails to include
a bonus calculation using the calculateBonus method.
3. Finally, create another class ExecutiveManager that further extends Manager and introduces a new method approveBudget.
4. Create an instance of ExecutiveManager, and ensure the encapsulation of private and protected members.
 */

class Employee {
    public name: string;
    private age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    protected calculateBonus(): number {
        return this.salary * 0.1; // 10% bonus
    }

    getSalaryDetails(): string {
        return `${this.name}'s base salary is ${this.salary}.`;
    }
}

class Manager extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getSalaryDetails(): string {
        const bonus = this.calculateBonus();
        return `${super.getSalaryDetails()} Bonus is ${bonus}.`;
    }
}

class ExecutiveManager extends Manager {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    approveBudget(amount: number): string {
        return `${this.name} approved a budget of ${amount}.`;
    }
}

// ✅ Testing encapsulation and behaviour
const exec = new ExecutiveManager("Ahmad", 35, 20000);
console.log(exec.getSalaryDetails());
console.log(exec.approveBudget(50000));

// ❌ These will error:
// console.log(exec.salary);      // error: property 'salary' is protected
// console.log(exec.age);         // error: property 'age' is private
// console.log(exec.calculateBonus()); // error: Method 'calculateBonus' is protected

/*
Exercise 2: Advanced Static Methods and Properties
1. Create a base class Shape with a static method getType that returns the type of the shape.
2. Define a static property totalShapes to count how many instances of any shape have been created.
3. Extend the class to Circle and Square, each with its own area calculation. Override the static method getType in each subclass.
4. Ensure that you track the total number of shapes created using the totalShapes static property.
 */

class Shape {
    static totalShapes: number = 0;

    constructor() {
        Shape.totalShapes++;
    }

    static getType(): string {
        return "Generic Shape"; // default for generic shapes
    }

    getArea(): number {
        return 0; // default for generic shapes
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    static override getType(): string {
        return "Circle";
    }

    override getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    static override getType(): string {
        return "Square";
    }

    override getArea(): number {
        return this.side * this.side;
    }
}

// ✅ Testing instance creation and static tracking
const circle1 = new Circle(5);
const square1 = new Square(4);
const square2 = new Square(6);
console.log(Circle.getType());
console.log(Square.getType());
console.log(Shape.getType());
console.log(`Total shapes created: ${Shape.totalShapes}`);
console.log(`Area of circle: ${circle1.getArea()}`);
console.log(`Area of square1: ${square1.getArea()}`);
console.log(`Area of square2: ${square2.getArea()}`);

/*
Exercise 3: Complex Interfaces with Function Types
1. Create an interface Calculator with properties for two numbers (a and b),
and a method operate that accepts a function for performing an operation (addition, subtraction, multiplication, etc.).
2. The operate method should apply the passed function to a and b and return the result.
3. Then, create a class AdvancedCalculator that implements this interface and can perform operations like add, subtract, and multiply.
 */

interface Calculator {
    a: number;
    b: number;

    operate(operation: (x: number, y: number) => number): number;
}

class AdvancedCalculator implements Calculator {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    operate(operation: (x: number, y: number) => number): number {
        return operation(this.a, this.b);
    }

    add(): number {
        return this.operate((x, y) => x + y);
    }

    subtract(): number {
        return this.operate((x, y) => x - y);
    }

    multiply(): number {
        return this.operate((x, y) => x * y);
    }
}

const calc = new AdvancedCalculator(10, 5);

console.log("Add:", calc.add());
console.log("Subtract:", calc.subtract());
console.log("Multiply:", calc.multiply());

const divide = (x: number, y: number) => x / y;
console.log("Divide:", calc.operate(divide));

/*
Exercise 4: Readonly Properties in Complex Inheritance
1. Create a base class Device with a readonly property serialNumber.
2. Extend it with a class Laptop that adds additional properties like model and price.
3. Ensure that the serialNumber is immutable but model and price can be updated.
4. Override a method to return the device information including the serialNumber.
 */

class Device {
    readonly serialNumber: string;

    constructor(serialNumber: string) {
        this.serialNumber = serialNumber;
    }

    getInfo(): string {
        return `Serial Number: ${this.serialNumber}`;
    }
}

class Laptop extends Device {
    model: string;
    price: number;

    constructor(serialNumber: string, model: string, price: number) {
        super(serialNumber);
        this.model = model;
        this.price = price;
    }

    override getInfo(): string {
        return `Serial Number: ${this.serialNumber}, Model: ${this.model}, Price: $${this.price}`;
    }
}

const laptop = new Laptop("SN123456789", "MacBook Pro", 2500);

// Update model and price
laptop.model = "MacBook Air";
laptop.price = 1999;

// laptop.serialNumber = "NEW123"; // compile-time error

console.log(laptop.getInfo());

/*
Exercise 5: Extending Multiple Interfaces with Optional and Readonly Properties
1. Create an interface Product with properties name (readonly), price, and an optional discount.
2. Then, create another interface Electronics that extends Product and adds a property warrantyPeriod.
3. Finally, create a class Smartphone that implements the Electronics interface and calculates the price after discount.
4. Ensure that the name is immutable, and the discount is optional.
 */

interface Product {
    readonly name: string;
    price: number;
    discount?: number;
}

interface Electronics extends Product {
    warrantyPeriod: number;
}

class Smartphone implements Electronics {
    readonly name: string;
    price: number;
    discount?: number;
    warrantyPeriod: number;

    constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        if (discount !== undefined) {
            this.discount = discount;
        }
    }

    getFinalPrice(): number {
        if (this.discount !== undefined) {
            return this.price - (this.price * this.discount) / 100;
        }
        return this.price;
    }

    getDetails(): string {
        return `${this.name} - Final Price: $${this.getFinalPrice()} - Warranty: ${this.warrantyPeriod} months`;
    }
}

const phone1 = new Smartphone("Galaxy S24", 1200, 24, 10);
const phone2 = new Smartphone("iPhone 15", 1300, 12);

console.log(phone1.getDetails()); // Galaxy S24 - Final Price: $1080 - Warranty: 24 months
console.log(phone2.getDetails()); // iPhone 15 - Final Price: $1300 - Warranty: 12 months

// phone1.name = "NewName"; // read-only property