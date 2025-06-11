/*
Star Wars Web App Using AJAX API

What you will learn
async/await
Fetch API

In this project you will have to build a single-page application that uses AJAX to retrieve information and display it on your website as follows:
Instructions
You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
Note: The API contains 83 different characters

1. Create your HTML file and add the relevant elements.

2. In your JS file, create your functions:
- to retrieve the elements from the DOM.
- to get the data from the API (star wars characters).
- to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

3. Display the data using AJAX. Make sure to display a loading message as follows:
You can use any of these animation icons for the loading message.
Fontawesome link:
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
*/

const characterContainer = document.getElementById("character-container")
characterContainer.innerHTML = `
Let's find a character!
`;

const fetchCharacterBtn = document.getElementById('find-someone');
fetchCharacterBtn.addEventListener('click', fetchCharacter)

async function fetchCharacter() {
    fetchCharacterBtn.disabled = true; // to avoid spamming

    characterContainer.innerHTML = `
        <div class="fa-2x">
          <i class="fa-solid fa-spinner fa-spin-pulse"></i><br>
          <span>Loading...</span>
        </div>
    `;
    try {
        // get a random number between 1 and 83
        const characterNumber = Math.floor(Math.random() * 83) + 1;

        const response = await fetch(`https://www.swapi.tech/api/people/${characterNumber}`);
        if (!response.ok) throw new Error(response.statusText);

        const character = await response.json();

        const response2 = await fetch(`${character.result.properties.homeworld}`);
        if (!response2.ok) throw new Error(response.statusText);

        const homeWorld = await response2.json();

        characterContainer.innerHTML = `
        <h3>${character.result.properties.name}</h3>
        <p>Height: ${character.result.properties.height}</p>
        <p>Gender: ${character.result.properties.gender}</p>
        <p>Birth Year: ${character.result.properties.birth_year}</p>
        <p>Home World: ${homeWorld.result.properties.name}</p>
        `;

        fetchCharacterBtn.disabled = false;
    } catch (error) {
        characterContainer.innerHTML = `
        <p>Oh, no! That person isn't available.</p>
        `;
        console.error(error);
    }
}
