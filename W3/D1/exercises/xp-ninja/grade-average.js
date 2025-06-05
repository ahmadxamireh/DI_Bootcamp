// Exercise 2: Grades Average
// Instructions
//
// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
//
// 1. Create a function called findAvg(gradesList) that takes an argument called gradesList.
// 2. Your function must calculate and console.log the average.
// 3. If the average is above 65 let the user know they passed
// 4. If the average is below 65 let the user know they failed and must repeat the course.
// Bonus: Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

function findAvg(gradesList) {
    const sum = gradesList.reduce((sum, grade) => sum + grade, 0);
    const average = sum / gradesList.length
    console.log(`The scores average is ${average.toFixed(2)}.`)
    return average;
}

function gradesStatus(gradesList) {
    const scoresAverage = findAvg(gradesList)
    if (scoresAverage >= 65) {
        console.log(`You passed.`)
    } else {
        console.log(`You failed and must repeat the course.`)
    }
}

const grades = [70, 92, 88, 95, 90, 83]
gradesStatus(grades)