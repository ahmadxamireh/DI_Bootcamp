import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [
            {
                id: 1,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                genre: "Fantasy"
            },
            {
                id: 2,
                title: "It",
                author: "Stephen King",
                genre: "Horror"
            },
            {
                id: 3,
                title: "The Martian",
                author: "Andy Weir",
                genre: "Science Fiction"
            }
        ]
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        }
    }
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;