/*
Exercise 1: HTML Form #3

1. Create a form like the form provided above. The form should contain three inputs:
- name, lastname, submit.

2. Send the data to another HTML file and display the sent data to a section tag, using the DOM.
*/

// Get URL parameters
// window.location.search => Output: "?name=John&lastname=Doe"
// params becomes an object-like structure that holds key-value pairs from the URL.

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const lastname = params.get('lastname');

// Display in the section
const section = document.getElementById('displaySection');
section.innerHTML = `<h2>Hello, ${name} ${lastname}!</h2>`;