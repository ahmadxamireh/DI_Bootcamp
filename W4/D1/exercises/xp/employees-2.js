// 🌟 Exercise 6: Employees #2
// Instructions
// Using this object:

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Using the filter() method, create a new array containing the students that passed the course.

const successfulStudents = students.filter(student => student.isPassed);
console.log(successfulStudents);

// 2. Bonus: Chain the filter method with a forEach method, to congratulate the students with their name and course
// name (i.e. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

students.filter(student => student.isPassed).forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}.`))