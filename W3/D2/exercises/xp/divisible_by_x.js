// 🌟 Exercise 1: Find the numbers divisible by 23
// Instructions

// 1. Create a function called displayNumbersDivisible() that takes no parameter.
// +
// 5. Bonus: Add a parameter divisor to the function: displayNumbersDivisible(divisor)
function displayNumbersDivisible(divisor) {
    let outcome = ""
    let total = 0
    // 2. In the function, loop through numbers 0 to 500.
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            outcome += `${i} `
            total += i
        }
    }
    // 3. Console.log all the numbers divisible by 23.
    console.log("Outcome : " + outcome.trim())
    // 4. At the end, console.log the sum of all numbers that are divisible by 23.
    console.log("Sum : " + total)
}

displayNumbersDivisible(23)
displayNumbersDivisible(3)
displayNumbersDivisible(45)