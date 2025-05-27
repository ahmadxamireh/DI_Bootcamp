// 🌟 Exercise 2 : Shopping List
// Instructions

// 1. Add the stock and prices objects to your js file.

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you
// have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana", "orange", "apple"]

// 3. Create a function called myBill() that takes no parameters.
function myBill() {
    // 4. The function should return the total price of your shoppingList. To do this you must follow these rules:
    // - The item must be in stock. (Hint : check out if .. in)
    // - If the item is in stock find out the price in the prices object.
    let total = 0
    for (let item of shoppingList) {
        // check if the item is in stock and is not 0
        if (item in stock && stock[item] !== 0) {
            total += prices[item]
            // 6. Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[item] -= 1
        }
    }
    return total
}

// 5. Call the myBill() function.
console.log(myBill());





