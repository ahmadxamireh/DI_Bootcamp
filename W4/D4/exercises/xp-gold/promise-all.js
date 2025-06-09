// Exercise 1: Promise.all()
// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(error => console.error("One of the promises failed:", error));
/*
Promise.all() takes an array of N promises and resolves if all of them are resolved, or rejects if at least one of
the promises fails.
We receive the output above because:
- promise1 resolves to 3 immediately.
- promise2 is a number (42), automatically treated as a resolved value.
- promise3 resolves after 3 seconds with 'foo'.
 */