// 🌟 Exercise 6: Change the navbar
// Instructions
// Create a new structured HTML file and a new JavaScript file
//
// <div id="navBar">
//     <ul>
//     <li><a href="#">Profile</a></li>
// <li><a href="#">Home</a></li>
// <li><a href="#">My Friends</a></li>
// <li><a href="#">Messenger</a></li>
// <li><a href="#">My Pics</a></li>
// </ul>
// </div>
//
// 1. Add the code above, to your HTML file

// 2. Using JavaScript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
// using the setAttribute method.
let divElem = document.getElementById('navBar')
divElem.setAttribute('id', 'socialNetworkNavigation')

// 3. We are going to add a new <li> to the <ul>.
// - First, create a new <li> tag (use the createElement method).
const newLi = document.createElement('li')

// - Create a new text node with “Logout” as its specified text.
const newTxt = document.createTextNode('Logout')

// - Append the text node to the newly created list node (<li>).
newLi.append(newTxt)

// - Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ulListItems = divElem.firstElementChild
ulListItems.appendChild(newLi)

// 4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from
// their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
console.log(ulListItems.firstElementChild.textContent)
console.log(ulListItems.lastElementChild.textContent)