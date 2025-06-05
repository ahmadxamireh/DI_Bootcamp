// Daily challenge: HTML Form
//
// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.


const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    // Create a JSON object with form data
    const jsonData = {
        name: firstName,
        lastname: lastName
    }
    // Display JSON string in the result div
    result.textContent = JSON.stringify(jsonData);
});