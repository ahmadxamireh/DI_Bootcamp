/*
Pokedex App

1. Create the corresponding tags in your HTML file, and select your elements in the JavaScript file.

2. You will use three buttons, one to fetch a random Pokémon, and the other two for the left and right buttons.

3 The random button will call an Async Await function to fetch the API and display the data (image, name, id, height, weight and type).

4. Make sure to add a catch block in the case of an error and display a message like “Oh no! That Pokémon isn’t available…”.

5. Remember to use a loading message while fetching the random Pokémon. It could be an icon or a GIF.

6. You will also use 2 Async Await functions to fetch the API when pressing the “previous” and “next” buttons.
The “previous” will fetch the previous Pokémon from the current one that is being displayed.
The “next” will fetch the next Pokémon from the current one that is being displayed.
(You can console.log a global variable in order to achieve this).
 */


const sprite = document.getElementById("pokemon-sprite")
const pokemonInfo = document.getElementById("pokemon-data")

let currentPokemonNumber = 1; // keep track of currently displayed Pokémon

async function fetchPokemon(pokemonNumber) {
    try {
        currentPokemonNumber = pokemonNumber;
        // to avoid spamming while loading
        fetchPokemonBtn.disabled = true;
        nextPokemonBtn.disabled = true;
        previousPokemonBtn.disabled = true;

        pokemonInfo.innerHTML = "";

        sprite.innerHTML = `
          <div class="fa-1x">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i><br>
          </div>
        `;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);

        if (!response.ok) throw new Error(response.statusText);

        const pokemonData = await response.json();

        const formURL = await fetch(`${pokemonData.forms[0].url}`);
        if (!formURL) throw new Error(formURL.statusText);

        const formData = await formURL.json()

        sprite.innerHTML = `
          <img src="${formData.sprites.front_default}">
        `;

        pokemonInfo.innerHTML = `
          <h3 style="font-weight: bold">${pokemonData.name.substring(0, 1).toUpperCase()}${pokemonData.name.substring(1)}</h3>
          <p id="pokemon-number">Pokemon n° ${pokemonNumber}</p>
          <p>Height: ${pokemonData.height}cm</p>
          <p>Weight: ${pokemonData.weight}gr</p>
          <p>Type: ${pokemonData.types[0].type.name}</p>
        `;
    } catch (error) {
        console.log(error);
        sprite.innerHTML = `
          <h6>Oh no! That Pokémon</h6>
          <h6>isn’t available…</h6>
        `;
        pokemonInfo.innerHTML = `
          <p>No Data Available<p>
        `;
    } finally {
        // re-enable buttons as appropriate after loading the data to DOM
        fetchPokemonBtn.disabled = false;
        if (pokemonNumber !== 1000) nextPokemonBtn.disabled = false;
        if (pokemonNumber !== 1) previousPokemonBtn.disabled = false;
    }
}

const fetchPokemonBtn = document.querySelector(".circle-btn")
fetchPokemonBtn.addEventListener("click", () => {
    fetchPokemon(Math.floor(Math.random() * 1000) + 1);
});

const nextPokemonBtn = document.querySelector(".right-btn")
nextPokemonBtn.disabled = true;
nextPokemonBtn.addEventListener("click", () => {
    fetchPokemon(Number(currentPokemonNumber) + 1);
})

const previousPokemonBtn = document.querySelector(".left-btn")
previousPokemonBtn.disabled = true;
previousPokemonBtn.addEventListener("click",  () => {
    fetchPokemon(Number(currentPokemonNumber) - 1);
})