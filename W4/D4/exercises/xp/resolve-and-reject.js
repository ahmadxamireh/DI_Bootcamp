// 🌟 Exercise 3: Resolve & Reject
// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

Promise.resolve(3).then(result => console.log(result));

// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.reject('Boo!').catch(error => console.log(error));