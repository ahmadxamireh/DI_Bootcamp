// 🌟 Exercise 3: Async function
// Improve the program below:
//
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
//
// Create an async function that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occurring errors.

const fetchData = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (response.ok) {
            const objectStarWars = await response.json();
            console.log(objectStarWars.result);
        } else {
            console.log(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (e) {
        console.log("An error occurred while fetching data: ", e);
    }
}

fetchData();