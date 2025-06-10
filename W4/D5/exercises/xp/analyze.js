// 🌟 Exercise 4: Analyze Exercise
// Analyze the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/*
Answer:
1. The function asyncCall() is invoked.
2. It logs 'calling' immediately to the console.
3. It then awaits the promise returned by resolveAfter2Seconds().
4. resolveAfter2Seconds() returns a promise that resolves with 'resolved' after 2 seconds.
5. Once the promise resolves, the result 'resolved' is logged to the console.
 */