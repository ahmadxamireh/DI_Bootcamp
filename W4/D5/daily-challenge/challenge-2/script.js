// Daily Challenge: Promise.all()
//
// What You will learn:
// Promises
// Promise.all()
// async/await
// try/catch
//
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
//
// 1. In the HTML file, create a form with 4 inputs:
// - the latitude and longitude of the first city
// - the latitude and longitude of the second city
//
// 2. Retrieve the input’s value and display the hour of the sunrise for both cities ONLY when both promises are resolved
// Hint : Use Promise.all()
//
//
// Try with Paris and New York
//
// Paris
// Latitude: 48.864716
// Longitude: 2.349014
//
// New York
// Latitude: 40.730610
// Longitude: -73.935242

document.getElementById('getWeather')
    .addEventListener('click', async () => {
        const lat1 = document.getElementById('latitude1').value;
        const lon1 = document.getElementById('longitude1').value;
        const lat2 = document.getElementById('latitude2').value;
        const lon2 = document.getElementById('longitude2').value;

        // The test() method of RegExp  instances executes a search with this regular expression for a match between
        // a regular expression and a specified string. Returns true if there is a match; false otherwise.
        const isValidFloat = (val) => /^-?\d+(\.\d+)?$/.test(val.trim());

        if (![lat1, lon1, lat2, lon2].every(isValidFloat)) {
            alert("Please enter valid float values for all latitudes and longitudes (e.g. 48.8566, -2.3522)");
            return;
        }

        const urls = [
            `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lon1}`,
            `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lon2}`
        ]

        try {
            const responseArr = await Promise.all(
                urls.map(async url => {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error(`Could not fetch ${url}`);
                    return await response.json();
                })
            )

            const weatherResults = document.getElementById('weatherResults');
            weatherResults.innerHTML = `
                <p>Sunrise time for City 1: ${responseArr[0].results.sunrise}</p>
                <p>Sunrise time for City 2: ${responseArr[1].results.sunrise}</p>
            `;
        } catch (error) {
            // console.log(error);
            alert(error.message);
            document.getElementById('weatherResults').innerHTML = '<p>Error fetching weather data.</p>';
        }
    });
