// Daily challenge: Tell the story
// What You will learn:
// Use the DOM and Forms

// Instructions
// In today's exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different
// word types (i.e.: noun, adjective, verb), and then a story is generated based on the words you chose, and
// sometimes the story is surprisingly funny.
//
// Follow these steps:

// 1. Get the value of each of the inputs in the HTML file when the form is submitted.
// Remember the event.preventDefault()

const form = document.getElementById('libform')
const libBtn = document.getElementById('lib-button')
const nounInput = document.getElementById('noun')
const adjectiveInput = document.getElementById('adjective')
const personInput = document.getElementById('person')
const verbInput = document.getElementById('verb')
const placeInput = document.getElementById('place')
const story = document.getElementById('story')

libBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const noun = nounInput.value.trim()
    const adjective = adjectiveInput.value.trim()
    const person = personInput.value.trim()
    const verb = verbInput.value.trim()
    const place = placeInput.value.trim()

    // 2. Make sure the values are not empty
    if (isValidWord(noun) && isValidWord(adjective) && isValidWord(person) && isValidWord(verb) && isValidWord(place)) {
        // 3. Write a story that uses each of the values.
        let generatedStory = `One day, ${person} went to ${place} with their ${adjective} ${noun} and decided to ${verb} all day long.`
        story.textContent = generatedStory;
        libBtn.disabled = true; // disable the Lib button once user inputs are validated
        shuffleBtn.disabled = false // enable the shuffle button
    } else {
        alert('Please enter valid words (no numbers) in all fields.');
    }
})

// Helper function
/**
 * Checks if input is valid (not empty and not a number)
 * @param {string} inputValue - The input value to check
 * @returns {boolean} True if input is valid, false otherwise
 */
function isValidWord(inputValue) {
    return inputValue !== '' && isNaN(inputValue);
}

// 4. Bonus: Add a “shuffle” button to the HTML file, when clicked, the button should change the story currently
// displayed (but keep the values entered by the user).
// The user could click the button at least three times and get a new story. Display the stories randomly.

const shuffleBtn = document.createElement('button')
shuffleBtn.textContent = 'Shuffle Story';
shuffleBtn.disabled = true // disable it at creation because inputs are empty
form.appendChild(shuffleBtn)

let i = 0;
shuffleBtn.addEventListener('click', event => {
    event.preventDefault();
    if (i === 2) { // max 3 shuffles as per instructions
        shuffleStory();
        nounInput.value = '';
        adjectiveInput.value = '';
        personInput.value = '';
        verbInput.value = '';
        placeInput.value = '';
        i = 0;
        libBtn.disabled = false; // enable the Lib button again because we will expect new inputs
        shuffleBtn.disabled = true // disable the shuffle button because we now have no values
    } else {
        shuffleStory();
        i += 1;
    }
})

/**
 * Generates a random and dynamic story based on user input values
 * (noun, adjective, person, verb, place) and updates the content
 * of the page with the randomly selected story template.
 *
 * @return {void} Does not return any value. Updates the text content
 * of the `story` element with a generated story.
 */
function shuffleStory() {

    const noun = nounInput.value.trim()
    const adjective = adjectiveInput.value.trim()
    const person = personInput.value.trim()
    const verb = verbInput.value.trim()
    const place = placeInput.value.trim()

    const storyTemplates = [
        `${person} couldn't believe their eyes when they saw a ${adjective} ${noun} trying to ${verb} in the middle of ${place}.`,
        `At ${place}, ${person} proudly brought out a ${adjective} ${noun} and shouted, "Let’s ${verb} together!"`,
        `Legend says ${person} once ${verb}ed through ${place} with nothing but a ${adjective} ${noun} in hand.`,
        `After waking up in ${place}, ${person} realized their ${adjective} ${noun} had vanished, leaving only a note that said "I must ${verb} now."`,
        `Nobody expected ${person} to ${verb} during the ceremony at ${place}, especially not while holding a ${adjective} ${noun}.`,
        `It was a quiet day at ${place} until ${person} arrived, waving a ${adjective} ${noun} and screaming, "Time to ${verb}!"`
    ];
    // Gives a random whole number: 0, 1, or 2. (storyTemplates.length = 3)
    story.textContent = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
}
