// Exercise 3: Analyze #5
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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)

/* Answer:

1. After a 5-second delay, the function parallel() is called.
2. It logs '==PARALLEL with await Promise.all==' immediately.
3. Two asynchronous IIFEs (Immediately Invoked Function Expressions) are started in parallel:
   - The first logs 'starting slow promise' and starts a 2-second timer.
   - The second logs 'starting fast promise' and starts a 1-second timer.
4. After 1 second, 'fast promise is done' is logged.
5. The second IIFE logs 'fast' once the fast promise resolves.
6. After 2 seconds, 'slow promise is done' is logged.
7. The first IIFE logs 'slow' once the slow promise resolves.
8. Since both async functions are awaited inside Promise.all, parallel() only completes after both promises resolve.

Final output:
==PARALLEL with await Promise.all==
starting slow promise
starting fast promise
fast promise is done
fast
slow promise is done
slow
*/