/*
 Daily challenge: Stars

 What You will learn:
 For loops and nested for loops

 Instructions
 1. Write a JavaScript program that recreates the pattern below.
 2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other).
 3. Do this Daily Challenge by yourself, without looking at the answers on the internet.
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */

for (let i = 1; i < 7; i++) {
    console.log("* ".repeat(i).trim())
}

for (let i = 1; i < 7; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars.trim());
}