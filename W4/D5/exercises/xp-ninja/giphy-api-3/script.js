// Exercise 1: Giphy API #3
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form containing an input and a button. This input is used to fetch a GIF depending on a specific category.
// Use the Fetch API to fetch the GIFs. Make sure to check the status of the Response and to catch any occurring errors.
// Append the relevant GIFs to the page.
// Hint: to find the URL of the GIF, look for the sub-object named “images” inside the data you receive from the API.

const inputField = document.getElementById('input');
const results = document.getElementById('gifs');

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
    if (inputField.value !== '') {
        fetchGIF();
    } else {
        alert('Please enter a valid input!');
    }
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    results.innerHTML = '';
})

async function fetchGIF() {
    const query = inputField.value;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${query}&rating=g`
    try {
        const response = await fetch(url)
        if (response.ok) {
            // get the response as JSON
            const data = await response.json();
            const gifID = data.data.id;

            // create image
            const image = document.createElement('img');
            image.src = data.data.images.fixed_height_small.url;
            image.id = gifID;
            image.style.padding = "1px";

            // append elements to DOM
            results.appendChild(image);
        } else {
            console.log(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (e) {
        console.log("An error occurred while fetching data: ", e);
    }
}