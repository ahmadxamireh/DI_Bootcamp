// Exercise 2: keys and values
// 1. Create a function that takes an object and returns the keys and values as separate arrays.
// 2. Return the keys sorted alphabetically, and their corresponding values in the same order.
//
// Example:
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

function keysAndValues(obj) {
    const sortedKeys = Object.keys(obj).sort(); // get and sort the keys
    const values = sortedKeys.map(key => obj[key]); // get the values accordingly
    console.log([sortedKeys, values]);
}

keysAndValues({a: 1, b: 2, c: 3})
keysAndValues({a: "Apple", c: "Microsoft", b: "Google"})
keysAndValues({key2: true, key3: false, key1: undefined})