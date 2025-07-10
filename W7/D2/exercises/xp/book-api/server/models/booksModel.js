import db from '../config/db.js';

export async function getAll() {
    return await db('books').select('*');
}

export async function getById(id) {
    const [book] = await db('books').where({ id }).select('*');
    return book;
}

export async function createBook(bookData) {
    const [newBook] = await db('books').insert(bookData).returning('*');
    return newBook;
}

export async function updateBook(id, bookData) {
    const [updatedBook] = await db('books').where({ id }).update(bookData).returning('*');
    return updatedBook;
}

export async function deleteBook(id) {
    const [deletedBook] = await db('books').where({ id }).delete().returning('*');
    return deletedBook;
}