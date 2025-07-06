// Use the axios package to make an HTTP GET request to a public API
// (e.g., weather data or news data) and display the fetched data in the terminal.

import axios from "axios";

export function fetchData(lat, lon) {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`)
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err));
}