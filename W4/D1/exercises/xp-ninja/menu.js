// Exercise 1: Menu
// Using the array below:

const menu = [
    {type: "starter", name: "Houmous with Pita"},
    {type: "starter", name: "Vegetable Soup with Houmous peas"},
    {type: "dessert", name: "Chocolate Cake"}
]

// 1. Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
const hasDessert = menu.some(item => item.type === "dessert")
hasDessert ? console.log("There's at least one dessert.") : console.log("No desserts found.");

// 2. Using an array method, check if all the elements in the array are starters.
const allStarters = menu.every(item => item.type === "starter")
allStarters ? console.log("All the items on the menu are starters") : console.log("No starter found.");

// 3. Using an array method, check if there is at least one element in the array that is a main course.
// If not, add a main course of your choice to the array.
if (!menu.some(item => item.type === "main course")) {
    menu.push({type: "main course", name: "Smoked Salmon"})
}

// Using this array:
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"]

// Using an array method, add a key “vegetarian” (a boolean) to the menu array.
// The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

for (let item of menu) {
    vegetarian.some(ingredient => item['name'].toLowerCase().includes(ingredient))
        ? item['vegetarian'] = true : item['vegetarian'] = false;
}
console.log(menu)