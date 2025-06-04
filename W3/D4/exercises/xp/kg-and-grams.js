// 🌟 Exercise 5: Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000 gr)
//
// 1. First, use a function declaration and invoke it.
function kgToGrams(weight) {
    return weight * 1000
}

// 2. Then, use a function expression and invoke it.
const kgToGrams2 = function (weight) {
    return weight * 1000
};

// 3. Write in a one-line comment the difference between function declaration and function expression.

/*
Answer:
Function declarations are hoisted and must be named. Function expressions can be anonymous and are not hoisted.
 */

// 4. Finally, use a one-line arrow function and invoke it.
const kgToGrams3 = weight => weight * 1000;
console.log(kgToGrams3(50), 'grams');