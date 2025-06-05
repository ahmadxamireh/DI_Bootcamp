// Exercise 7: My Book List
// Instructions
//
// The point of this challenge is to display a list of two books on your browser.

// 1. In the body of the HTML page, create an empty section: <section class="listBooks"></section>

// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4
// keys (ie. 4 properties):
// - title,
// - author,
// - image: a url,
// - alreadyRead: which is a boolean (true or false).

// 3. Initiate the array with 2 books of your choice (ie. Manually add 2 book objects in the array)

let allBooks = [
    {
        'title': 'Harry Potter',
        'author': 'J.K. Rolling',
        'image': 'https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg',
        'alreadyRead': true
    },
    {
        'title': 'The Lord of the Rings',
        'author': 'J.R.R. Tolkien',
        'image': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
        'alreadyRead': false
    }
]

// 4. Requirements: All the instructions below need to be coded in the js file:
// - Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book:
// - You have to display the book’s title and the book’s author.
// - Example: HarryPotter written by JKRolling.
// - The width of the image has to be set to 100px.
// - If the book is already read. Set the color of the book’s details to red.
let listBooks = document.querySelector('section.listBooks')

for (let book of allBooks) {
    let bookDiv = document.createElement('div')
    bookDiv.className = 'bookDiv'
    bookDiv.innerHTML = `<p>${book.title} (${book.author})</p>`
    bookDiv.innerHTML += `<img src="${book.image}" alt="${book.title} book cover" width="100px"/>`
    if (book.alreadyRead) {
        bookDiv.style.color = 'red';
    }
    listBooks.appendChild(bookDiv)
}
