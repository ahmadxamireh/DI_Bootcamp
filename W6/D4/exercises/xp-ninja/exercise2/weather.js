// define a function that takes a city name as a parameter and uses the axios package to make a request to a weather API (e.g., OpenWeatherMap)

import axios from "axios";
import chalk from 'chalk';

// we will use Open-Meteo APIs

export async function getWeatherByCity(cityName) {
    // get coordinates
    const {latitude, longitude} = await getGeoLocation(cityName);
    // get weather
    const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`
    );
    const weather = weatherRes.data.current_weather;

    console.log(chalk.bold(`\nCurrent Weather in ${cityName}:`));
    console.log('Temperature:', chalk.cyan(weather.temperature), '°C');
    console.log('Wind Speed:', chalk.red(weather.windspeed), 'km/h');
    console.log('Wind Direction:', chalk.yellow(weather.winddirection));
}

async function getGeoLocation(cityName) {
    const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search?name=' + cityName)
    // if results array is empty
    if (!geoRes.data.results || geoRes.data.results.length === 0) {
        throw new Error('City not found');
    }
    return geoRes.data.results[0];
}