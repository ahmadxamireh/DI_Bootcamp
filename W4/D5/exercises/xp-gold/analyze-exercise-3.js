// Exercise 3: Analyze #3
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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)

/* Answer:

1. concurrentStart() is called after a 4-second delay.
2. It logs '==CONCURRENT START with await==' immediately.
3. resolveAfter2Seconds() is called and logs 'starting slow promise', starting a 2-second timer.
4. resolveAfter1Second() is then called and logs 'starting fast promise', starting a 1-second timer.
5. After 1 second, 'fast promise is done' is logged.
6. After 2 seconds, 'slow promise is done' is logged.
7. The function awaits 'slow' first, so it waits until it resolves and then logs 'slow'.
8. Then it awaits 'fast', which has already resolved, so it logs 'fast' immediately.

Final output:
==CONCURRENT START with await==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/