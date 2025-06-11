// Exercise 4: Analyze #6
// Analyze the code provided below - what will be the outcome?

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)

/* Answer:

1. After a 13-second delay, parallelPromise() is called.
2. It logs '==PARALLEL with Promise.then==' immediately.
3. resolveAfter2Seconds() is called and logs 'starting slow promise', starting a 2-second timer.
4. resolveAfter1Second() is called right after and logs 'starting fast promise', starting a 1-second timer.
5. After 1 second, 'fast promise is done' is logged.
6. The fast promise resolves and its .then callback logs 'fast'.
7. After 2 seconds, 'slow promise is done' is logged.
8. The slow promise resolves and its .then callback logs 'slow'.

Final output:
==PARALLEL with Promise.then==
starting slow promise
starting fast promise
fast promise is done
fast
slow promise is done
slow
*/