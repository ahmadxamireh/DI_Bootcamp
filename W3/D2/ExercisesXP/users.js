// 🌟 Exercise 5: Users
// Instructions
// Create a new structured HTML file and a new JavaScript file
//
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>
//
// 1. Add the code above, to your HTML file

// 2. Using JavaScript:
// - Retrieve the div and console.log it
let div = document.querySelector('div')
console.log(div);

// - Change the name “Pete” to “Richard”.
let listItems = document.querySelectorAll('ul.list'); // Select all <ul> elements with class "list"
let firstListItems = listItems[0].querySelectorAll('li'); // Select all <li> elements within the first <ul>
firstListItems[1].textContent = 'Richard'; // Change the second <li> of the first <ul> to "Richard".

// - Delete the second <li> of the second <ul>.
let secondListItems = listItems[1].querySelectorAll('li'); // Select all <li> elements within the second <ul>
secondListItems[1].remove(); // Remove the second <li> of the second <ul> (which was "Sarah").

// - Change the name of the first <li> of each <ul> to your name. (Hint: use a loop)
for (let list of listItems) {
    list.firstElementChild.textContent = 'Ahmad';
}

// 3. Using JavaScript:
// - Add a class called student_list to both of the <ul>'s.
listItems[0].classList.add('student_list', 'university', 'attendance'); // Add classes to the first <ul>
// - Add the classes university and attendance to the first <ul>.
listItems[1].classList.add('student_list'); // Add class to the second <ul>

// 4. Using JavaScript:
// - Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = 'lightblue'; // Set background color to light blue
div.style.padding = '10px'; // Add padding to the <div>

// - Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
listItems[1].lastElementChild.style.display = 'none'; // Hide the last <li> of the second <ul> (which contains "Dan")

// - Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
listItems[0].firstElementChild.nextElementSibling.style.border = '1px solid black';

// - Change the font size of the whole body.
document.body.style.fontSize = '18px';

// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor === 'lightblue') {
    alert(`Hello ${firstListItems[0].textContent} and ${firstListItems[1].textContent}`);
}
