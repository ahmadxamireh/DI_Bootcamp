// Exercise 2: Analyze #2
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

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()

/*
Answer:

1. The function sequentialStart() is initiated.
2. It immediately logs '==SEQUENTIAL START==' to the console.
3. It calls resolveAfter2Seconds(), which:
   3.1 Logs 'starting slow promise' immediately.
   3.2 Starts a 2-second timer, after which:
       - Logs 'slow promise is done'
       - Resolves with the value 'slow'
4. The value 'slow' is awaited and then logged to the console.
5. It then calls resolveAfter1Second(), which:
   5.1 Logs 'starting fast promise' immediately.
   5.2 Starts a 1-second timer, after which:
       - Logs 'fast promise is done'
       - Resolves with the value 'fast'
6. The value 'fast' is awaited and then logged to the console.

Final output:
==SEQUENTIAL START==
starting slow promise
slow promise is done
slow
starting fast promise
fast promise is done
fast
*/