// Exercise 3: What’s in my wallet?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions.
//
// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
//    - an item price
//    - and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange) {
    // 2. In the function, determine whether or not you can afford the item.
    // - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item),
    // the function should return true
    // - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item), the
    // function should return false
    // 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    // - A quarter is 0.25
    // - A dime is 0.10
    // - A nickel is 0.05
    // - A penny is 0.01

    const quarters = amountOfChange[0] * 0.25
    const dimes = amountOfChange[1] * 0.10
    const nickels = amountOfChange[2] * 0.05
    const pennies = amountOfChange[3] * 0.01

    const totalChange = quarters + dimes + nickels + pennies

    return totalChange >= itemPrice;
}

// 4. To illustrate:
// After you create the function, invoke it like this:
//
// changeEnough(4.25, [25, 20, 5, 0])
// - The value 4.25 represents the item’s price
// - The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// - The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2
// + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))