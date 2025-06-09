// Exercise 2: Analyze Promise.all()
// Analyze the code below - what will be the output?

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
    .then(result => {
        console.log(result);
    });

/*
Promise.all() takes an array of promises and returns a single promise.
- It resolves when all input promises resolve, with an array of their resolved values (in order).
- It rejects immediately if any promise rejects.

promiseArr does the following:
- timesTwoAsync(x) returns a promise that resolves to x * 2
- arr.map(timesTwoAsync) produces [Promise(2), Promise(4), Promise(6)]
- Promise.all waits for them all to resolve

So the final result is: [1, 2, 3] -> [2, 4, 6]
*/