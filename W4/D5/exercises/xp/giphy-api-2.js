// 🌟 Exercise 2: Giphy API
// Use the Fetch API to retrieve 10 GIFs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occurring errors.
// Console.log the JavaScript Object that you receive.

async function fetchData() {
    try {
        // modified the URL to search for 'sun' and display 10 results using 'limit' and 'offset' by 2
        const url = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.data);
        } else {
            console.log(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.log("An error occurred while fetching data: ", error);
    }
}

fetchData();