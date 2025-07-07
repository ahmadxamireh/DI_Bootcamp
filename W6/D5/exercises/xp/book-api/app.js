// import the express module and create an instance of an Express app.

import express from 'express';

const app = express();

// Define a basic data array containing a few book objects.
// Each book object should have properties like id, title, author, and publishedYear.

let books = [
    {id: 1, title: "1984", author: "George Orwell", publishedYear: 1949},
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960}
];

app.use(express.json()); // parses JSON for all requests

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

app.get('/api/books', (req, res) => {
    if (books.length === 0) return res.send('No books found.');
    res.status(200).json(books);
})

// Implement the “Read” route by defining a route at GET /api/books/:bookId.
// Extract the bookId parameter from the URL and use it to find the corresponding book in the books array.
// If the book is found, send a JSON response with the book details and a status code of 200 (OK).
// If the book is not found, send a 404 status with a “Book not found” message.

app.get('/api/books/:bookId', (req, res) => {
    const bookId = Number(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (!book) return res.status(404).send('Book not found.');
    res.status(200).json(book);
})

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content.
// Inside the route handler, create a new book object with an incremented ID and the data from the request body.
// Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

app.listen(5000, 'localhost', () => console.log('Server is running on http://localhost:5000'));

// handle unmatched routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});