// Daily challenge: Planets
//
// What You will learn:
// DOM tree
//
// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system, and we will fill the
// solar system with planets and their moons.
// - We will provide the HTML page.
// - You only have to work with a JS file.
//
// 1. Create an array whose value is the planets of the solar system.
// +
// 5. Bonus: Do the same process to create the moons.
// - Be careful, each planet has a certain number of moons. How should you display them?
// - Should you still use an array for the planets? Or an array of objects?

let planets = [];
const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
const moonsPerPlanet = [0, 0, 1, 2, 79, 83, 27, 14];

for (let i = 0; i < planetNames.length; i++) {
    let tempPlanet = {
        'name': `${planetNames[i]}`,
        'color': getRandomColor(),
        'numOfMoons': moonsPerPlanet[i]
    }
    planets.push(tempPlanet);
}

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each
// class containing a different background-color).
// 4. Finally, append each div to the <section> in the HTML.

for (let planet of planets) {
    let div = document.createElement('div');
    div.classList.add('planet', `${planet.name}`)
    div.style.backgroundColor = planet.color
    for (let i = 0; i < planet.numOfMoons; i++) {
        let moon = document.createElement('p')
        moon.classList.add('moon')
        moon.style.left = `${30 * i}px`;
        div.appendChild(moon)
    }
    document.querySelector('section.listPlanets').appendChild(div);
}

// helper function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}