// Exercise 1: Checking BMI
// Instructions
//
// 1. Create two objects, each object should hold a person’s details. Here are the details:
// - FullName
// - Mass
// - Height
//
// 2. Each object should also have a key which value is a function (i.e., A method)
// that calculates the Body Mass Index(BMI) of each person

const person1 = {
    fullName: 'Randy Wolf',
    mass: 76, // in kilograms
    height: 180, // in centimeters
    bmi: function () {
        return this.mass / (this.height / 100) ** 2;
    }
}

const person2 = {
    fullName: 'Jack Ryan',
    mass: 70,
    height: 173,
    bmi: function () {
        return this.mass / (this.height / 100) ** 2;
    }
}

// 3. Outside the objects, create a JS function that compares the BMI of both objects.

function compareBMI(obj1, obj2) {
    const bmi1 = obj1.bmi();
    const bmi2 = obj2.bmi();

    if (bmi1 > bmi2) {
        console.log(`${obj1.fullName} has a higher BMI (${bmi1.toFixed(2)} vs ${bmi2.toFixed(2)}).`);
    } else if (bmi2 > bmi1) {
        console.log(`${obj2.fullName} has a higher BMI (${bmi2.toFixed(2)} vs ${bmi1.toFixed(2)}).`);
    } else {
        console.log(`${obj1.fullName} and ${obj2.fullName} have the same BMI (${bmi1.toFixed(2)}).`);
    }
}

// 4. Display the name of the person who has the largest BMI.

compareBMI(person1, person2);