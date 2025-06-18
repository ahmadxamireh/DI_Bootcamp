// 1. Create an empty array.
let shoppingList = [];

// 2. Create a form containing a text input field and an “AddItem” button. Add this form to the DOM.
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add an item';
const button = document.createElement('button');
button.textContent = 'Add Item';
form.appendChild(input);
form.appendChild(button);
document.getElementById('root').appendChild(form);

// 3. Type what you need to buy in the text input field,
// then add the new item to the array as soon as you click on the “AddItem” button
// (Hint: create a function named addItem()).
function addItem(event) {
    event.preventDefault(); // Prevent form submission
    const item = input.value.trim();
    if (item) {
        shoppingList.push(item);
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter an item to add.');
    }
    displayShoppingList(); // Display the updated shopping list
}

button.addEventListener('click', addItem);

// 4. Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll().
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear All';
document.getElementById('root').appendChild(clearButton);
clearButton.addEventListener('click', clearAll);

// 5. Create a function named clearAll() that should clear out all the items in the shopping list.
function clearAll() {
    shoppingList = []; // Clear the shopping list array
    displayShoppingList(); // Display the updated shopping list
}

// Extra: Display the shopping list on the DOM whenever an item is added or cleared.
function displayShoppingList() {
    const listContainer = document.getElementById('listContainer') || document.createElement('div');
    listContainer.id = 'listContainer';
    listContainer.innerHTML = ''; // Clear previous items
    shoppingList.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        listContainer.appendChild(itemElement);
    });
    document.getElementById('root').appendChild(listContainer);
}