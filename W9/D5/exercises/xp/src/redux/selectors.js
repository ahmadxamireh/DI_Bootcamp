import { createSelector } from '@reduxjs/toolkit';

const selectBooks = state => state.inventory.books;

export const selectHorrorBooks = createSelector(
    [ selectBooks ],
    books => books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector(
    [ selectBooks ],
    books => books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
    [ selectBooks ],
    books => books.filter((book) => book.genre === "Science Fiction")
);