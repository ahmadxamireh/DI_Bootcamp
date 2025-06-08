// 🌟 Exercise 1: Comparison
// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
// - the promise resolves if the argument is less than or equal to 10
// - the promise rejects if the argument is greater than 10.

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is smaller than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))