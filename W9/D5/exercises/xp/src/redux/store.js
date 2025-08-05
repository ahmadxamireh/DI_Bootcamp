import { configureStore } from "@reduxjs/toolkit";
import bookReducer from'./bookSlice.js';

export const store = configureStore({
    reducer: {
        inventory: bookReducer
    }
});