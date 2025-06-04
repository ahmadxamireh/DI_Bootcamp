// Daily challenge: Groceries
//
// What You will learn:
// Objects
// Reference and Value
//
// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.
// Use the forEach method.

const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit))

// 2. Create another arrow function named cloneGroceries.
// - In the function, create a variable named user that is a copy of the client variable.
// - (Tip: make the user variable equal to the client variable)
// - Change the client variable to “Betty”. Will we also see this modification in the user variable? Why?
// - In the function, create a variable named shopping that is equal to the groceries variable.
// - Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object? Why?
// - Change the value of the paid key to false. Will we also see this modification in the shopping object? Why?

const cloneGroceries = () => {
    let user = client; // this creates a copy by value of the primitive string 'John'.
    client = "Betty"; // user value will not change because strings are primitive types and passed by value, not by reference.
    let shopping = groceries
    shopping.totalPrice = "35$" // this will modify the groceries objects because it references to it
    shopping.other.paid  = false; // this will modify the groceries objects because it references to it
}

// 3. Invoke the cloneGroceries function.
cloneGroceries()