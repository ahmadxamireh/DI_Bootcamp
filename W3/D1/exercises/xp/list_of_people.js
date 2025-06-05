/*
 🌟 Exercise 1: List of people
 Instructions
 const people = ["Greg", "Mary", "Devon", "James"];

 Part I - Review about arrays
 */

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write code to remove “Greg” from the people array.
people.shift() // [ 'Mary', 'Devon', 'James' ]

// 2. Write code to replace “James” to “Jason”.
people.splice(people.indexOf("James"), 1, "Jason") // [ 'Mary', 'Devon', 'Jason' ]

// 3. Write code to add your name to the end of the people array.
people.push("Ahmad") // [ 'Mary', 'Devon', 'Jason', 'Ahmad' ]

// 4. Write code that console.logs Mary’s index. Take a look at the indexOf method on Google.
console.log(people.indexOf("Mary")) // 0

/*
 5. Write code to make a copy of the people array using the slice method.
 The copy should NOT include “Mary” or your name.
 Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
 */
people_copy = people.slice(1, people.length - 1) // [ 'Devon', 'Jason' ]

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
i = people.indexOf("Foo")
console.log(`index of Foo is ${i} because it is not in the array.`)

// 7. Create a variable called last which value is the last element of the array.

let last = people[people.length - 1]
console.log(last)


// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.
for (let person of people) {
    console.log(person)
}

/*
 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
 Hint: take a look at the break statement in the lesson.
 */
for (let person of people) {
    console.log(person)
    if (person === "Devon") {
        break;
    }
}