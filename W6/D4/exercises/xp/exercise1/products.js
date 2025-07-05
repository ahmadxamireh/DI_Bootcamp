// Exercise 1: Multiple Exports and Import using CommonJS syntax

// 1. Create a file named products.js.
// 2. Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

const products = [
    {name: 'Apple', price: 5, category: 'Fruit'},
    {name: 'Lemon', price: 10, category: 'Vegetable'},
    {name: 'Cheese', price: 15, category: 'Dairy'}
];

// 3. Export this array using the Common JS syntax.

module.exports = products;