import * as Books from '../models/booksModel.js';

export async function getAllBooks(req, res, next) {
    try {
        const books = await Books.getAll();
        res.json(books);
    } catch (err) {
        next(err);
    }
}

export async function getBookById(req, res, next) {
    try {
        const bookId = Number(req.params.id);
        const book = await Books.getById(bookId);
        if (!book) return res.status(404).send('Book not found');
        res.json(book);
    } catch (err) {
        next(err);
    }
}

export async function createBook(req, res, next) {
    try {
        const { title, author, published_year } = req.body;
        if (!title || !author || !published_year)
            return res.status(400).send('Book title, author or publishedYear are missing!');
        const newBook = await Books.createBook({ title, author, published_year });
        res.status(201).json(newBook);
    } catch (err) {
        next(err);
    }
}

export async function updateBook(req, res, next) {
    try {
        const bookId = Number(req.params.id);
        const book = await Books.getById(bookId);
        if (!book) return res.status(404).send('Book not found');
        const { title, author, published_year } = req.body;
        const updatedBook = await Books.updateBook(bookId, {
            title: typeof title === 'undefined' ? book.title : title,
            author: typeof author === 'undefined' ? book.author : author,
            published_year: typeof published_year === 'undefined' ? book.published_year : published_year
        });
        res.json(updatedBook);
    } catch (err) {
        next(err);
    }
}

export async function deleteBook(req, res, next) {
    try {
        const bookId = Number(req.params.id);
        const book = await Books.getById(bookId);
        if (!book) return res.status(404).send('Book not found');
        const deletedBook = await Books.deleteBook(bookId);
        res.json(deletedBook);
    } catch (err) {
        next(err);
    }
}