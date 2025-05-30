// 🌟 Exercise 2: Work with forms
// Instructions

// 1. Retrieve the form and console.log it.

const form = document.forms[0]
console.log(form);

// 2. Retrieve the inputs by their id and console.log them.

const firstName_byID = document.getElementById("fname");
console.log(firstName_byID)
const lastName_byID = document.getElementById("lname");
console.log(lastName_byID)

// 3. Retrieve the inputs by their name attribute and console.log them.

const firstName_byName = document.getElementsByName("firstname")[0];
console.log(firstName_byName);
const lastName_byName = document.getElementsByName("lastname")[0];
console.log(lastName_byName);

// 4. When the user submits the form (i.e., submit event listener)

// - use event.preventDefault(), why ?

const submitBtn_byID = document.getElementById("submit");
submitBtn_byID.addEventListener("click", function (event) {
    // prevent default behavior so it does not add the values to the URL
    // the Form method is set to GET by default
    event.preventDefault();

    // - get the values of the input tags,
    let firstName = firstName_byID.value.trim()
    let lastName = lastName_byID.value.trim()

    // - make sure that they are not empty,
    if (firstName.length !== 0 && lastName.length !== 0) {
        // - create a li per input value,
        const li1 = document.createElement("li");
        li1.textContent = firstName;
        const li2 = document.createElement("li");
        li2.textContent = lastName;

        // - then append them to the <ul class="usersAnswer"></ul>, below the form.
        const ul = document.querySelector('ul.usersAnswer')
        ul.appendChild(li1);
        ul.appendChild(li2);

        // reset the input fields
        firstName_byID.value = '';
        lastName_byID.value = '';
    }
})