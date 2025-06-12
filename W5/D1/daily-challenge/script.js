/*
Daily Challenge: Currency Converter

The program should take the currency which the user currently has and the currency in which they would like to receive,
as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter.
Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint.
Check out this page on Pair conversion requests from the ExchangeRate API documentation.
Hint: You could also supply an optional AMOUNT variable in the query of the request.

Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
Example: if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.
 */

const fromCurrencies = document.getElementById("fromCurrencies")
const toCurrencies = document.getElementById("toCurrencies")

fromCurrencies.addEventListener("change", () => result.placeholder = "Conversion Result");
toCurrencies.addEventListener("change", () => result.placeholder = "Conversion Result");

const result = document.getElementById("result")
const userAmount = document.getElementById("amount")

async function loadCurrencies() {
    try {
        const currenciesJSON = await fetch('./currencies.json');

        if (!currenciesJSON.ok) throw new Error(currenciesJSON.statusText);

        const currencies = await currenciesJSON.json();

        console.log(currencies);

        // populate the dropdown menu with options from the JSON file
        let options = "";
        for (let i in currencies) {
            options += (`<option value="${i}">${i} - ${currencies[i]}</option>\n`);
        }

        // populate the dropdown menus
        fromCurrencies.innerHTML = options;
        toCurrencies.innerHTML = options;

        // set default selected values
        fromCurrencies.value = "USD";
        toCurrencies.value = "ILS"
    } catch (e) {
        console.log(e)
    }
}

loadCurrencies()

async function convert() {
    if (userAmount.value === "") {
        alert("Please enter a value to convert!");
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${fromCurrencies.value}`)

        if (!response.ok) throw new Error("Could not find a response from API")

        const data = await response.json()

        const conversionRate = data.conversion_rates[toCurrencies.value]

        result.placeholder = `${Number((userAmount.value * conversionRate).toFixed(2)).toLocaleString()} ${toCurrencies.value}`;

    } catch (e) {
        alert(e)
    }
}

// flip the currencies that we are converting from and to and return the new conversion result
async function flip() {
    try {
        const temp = fromCurrencies.value;
        fromCurrencies.value = toCurrencies.value;
        toCurrencies.value = temp;
        await convert();
    } catch (e) {
        console.log(e)
    }
}