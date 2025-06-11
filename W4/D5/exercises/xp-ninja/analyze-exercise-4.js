// Exercise 2: Analyze #4
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

// The Promise.all() method returns a single Promise that fulfills when all the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)

/* Answer:

1. After a 1-second delay, concurrentPromise() is called.
2. It logs '==CONCURRENT START with Promise.all==' immediately.
3. resolveAfter2Seconds() is called and logs 'starting slow promise', starting a 2-second timer.
4. resolveAfter1Second() is then called and logs 'starting fast promise', starting a 1-second timer.
5. After 1 second, 'fast promise is done' is logged.
6. After 2 seconds, 'slow promise is done' is logged.
7. Once both promises resolve, the .then callback runs:
   - It logs 'slow' (the result from resolveAfter2Seconds).
   - Then it logs 'fast' (the result from resolveAfter1Second).

Final output:
==CONCURRENT START with Promise.all==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/