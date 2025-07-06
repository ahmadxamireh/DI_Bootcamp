// define a function that prompts the user to enter a city name.
// Use the readline module to get user input and pass the city name to the weather.js module to fetch and display weather information.

import readline from 'readline';
import {getWeatherByCity} from './weather.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a city name: ', async (city) => {
    try {
        const trimmed = city.trim();
        if (!trimmed) {
            console.error('Please enter a valid city name.');
        } else {
            await getWeatherByCity(trimmed);
        }
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        rl.close();
    }
});