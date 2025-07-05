// 4. Create another file named app.js.
// 5. In app.js, import the array of person objects from the data.js module.

import {people} from "./data.js";

// 6. Write a function that calculates and prints the average age of all the persons in the array.

function averageAge(peopleArr) {
    const totalAge = peopleArr.reduce((acc, curr) => {
        return acc + curr.age;
    }, 0);
    return totalAge / peopleArr.length;
}

// 7. Use the imported array and the average age function in app.js.

console.log(averageAge(people))