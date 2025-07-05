//4. Create another file named shop.js.
// 5. In shop.js, require the product objects from the products.js module.

const products = require('./products.js');

// 6. Create a function that takes a product name as a parameter and searches for the corresponding product object.

function findProduct(name, productsArr) {
    for (let product of productsArr) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            console.log(`Product name: ${product.name}, Price: ${product.price}, Category: ${product.category}.`);
            return;
        }
    }
    console.log(`Product ${name} not found.`);
}

// 7. Call this function with different product names and print the details of the products.

findProduct('apple', products);
findProduct('Cheese', products);
findProduct('banana', products);