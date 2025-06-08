// 🌟 Exercise 2: Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const p = new Promise(resolve => {
    setTimeout(() => {
        resolve('success');
    }, 4000)
}).then(result => console.log(result))