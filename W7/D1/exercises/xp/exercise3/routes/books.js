import express from "express";

const router = express.Router();

// Sample in-memory database for storing books
const books = [];
let nextId = 1; // unique ID tracker

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const { title, description, author } = req.body;
    if (!title || !description || !author) return res.status(400).send('Book title, description or author are' +
        ' missing.');
    const newBook = {
        id: nextId++,
        title: title,
        description: description,
        author: author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const bookId = Number(req.params.id);
    if (!bookId) return res.status(400).send('Book id is missing.');
    const index = books.findIndex((book) => book.id === bookId);
    if (index < 0) return res.status(404).send('Book does not exist.');
    const { title, description, author } = req.body;
    const book = books[index];
    // if some data is missing, keep the original data.
    const updatedBook = {
        id: bookId,
        title: typeof title === 'undefined' ? book.title : title,
        description: typeof description === 'undefined' ? book.description : description,
        author: typeof author === 'undefined' ? book.author : author
    };
    books[index] = updatedBook;
    res.json(updatedBook);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const bookId = Number(req.params.id);
    if (!bookId) return res.status(400).send('Book id is missing.');
    const index = books.findIndex((book) => book.id === bookId);
    if (index < 0) return res.status(404).send('Book does not exist.');
    const bookToDelete = books.splice(index, 1);
    res.json(bookToDelete);
});

export default router;