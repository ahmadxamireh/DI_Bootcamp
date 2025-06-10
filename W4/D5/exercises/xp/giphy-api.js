// 🌟 Exercise 1: Giphy API
// With your newly accumulated knowledge of the Fetch API lets write some cool code!
//
// You will use this GIF URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//
// Explanation of the GIF URL and the queries
//
// - q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” GIFs
// - rating Request Parameter: Filters results by specified rating. We are searching for Level 1 GIFs.
// - api_key Request Parameter: GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the JavaScript Object that you receive.
// Make sure to check the status of the Response and to catch any occurring errors.

async function fetchData() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
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