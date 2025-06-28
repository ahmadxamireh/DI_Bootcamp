/*
Daily Challenge: Type Guard with Union Types
Create a function handleData that processes an array of mixed types.
The array can contain objects with different structures.
Implement type guards to handle each type of object and perform specific operations based on their structure.
 */

// Define the following types:

type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

/*
Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
    - For User objects, return a greeting message with the user’s name and age.
    - For Product objects, return a message with the product ID and its price.
    - For Order objects, return a summary of the order with its ID and amount.
    - Ensure your function handles unexpected cases gracefully.
 */

function handleData(data: (User | Product | Order)[]): string {
    if (data.length === 0) return "Empty data array";
    const results = data.map((item) => {
        if (item.type === "user") return `Greetings, ${item.name}, you are ${item.age} years old!`;
        if (item.type === "product") return `Product ID: ${item.id}, Price: $${item.price}.`
        if (item.type === "order") return `Order ID: ${item.orderId}, Amount: $${item.amount}.`
        return "Unsupported data type!"
    })
    return results.join("\n");
}

// test data

const mixedData: (User | Product | Order)[] = [
    {type: "user", name: "Ahmad", age: 28},
    {type: "product", id: 101, price: 25},
    {type: "order", orderId: "X123", amount: 300},
];

console.log(handleData(mixedData));