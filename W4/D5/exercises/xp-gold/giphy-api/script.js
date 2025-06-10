// Exercise 1: Giphy API #2
// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a GIF. Make sure to check the status of the Response and to catch any occurring errors.
// Once the server sends back data, append one random GIF to the page.
// Hint: to find the URL of the GIF, look for the sub-object named “images” inside the data you receive from the API.

async function fetchData() {
    try {
        // fetch a random GIF (no tag)
        const url = 'https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&rating=g'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const gif = document.createElement('img');
            gif.src = data.data.images.original.url;
            document.body.appendChild(gif);
        } else {
            console.log(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.log("An error occurred while fetching data: ", error);
    }
}

fetchData();