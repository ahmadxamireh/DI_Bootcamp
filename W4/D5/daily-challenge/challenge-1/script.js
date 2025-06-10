// Daily Challenge: GIFs
//
// What You will learn:
// Fetch Api
// Async/Await
// Try/Catch
//
// Instructions
// 1. Use this API Key: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 2. In the HTML file, add a form containing an input and a button.
// This input is used to fetch a GIF depending on a specific category.
// 3. In the JS file, create a program to fetch one random GIF depending on the search of the user
// (i.e., If the search is “sun”, append on the page one GIF with a category of “sun”).
// 4. The GIF should be appended with a DELETE button next to it.
// Hint: to find the URL of the GIF, look for the sub-object named “images” inside the data you receive from the API.
// 5. Allow the user to delete a specific GIF by clicking the DELETE button.
// 6. Allow the user to remove all the GIFs by clicking a DELETE ALL button.

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

            // create a div for each GIF
            const div = document.createElement('div');
            div.id = gifID;

            // create image
            const image = document.createElement('img');
            image.src = data.data.images.fixed_height_small.url;
            div.appendChild(image);
            div.appendChild(document.createElement('br'))

            // create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', (e) => {
                results.removeChild(document.getElementById(gifID))
            });
            div.appendChild(deleteBtn);

            // append elements to DOM
            results.appendChild(div);
            results.appendChild(document.createElement('br'));

            // reset input field
            inputField.value = '';
        } else {
            console.log(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (e) {
        console.log("An error occurred while fetching data: ", e);
    }
}

