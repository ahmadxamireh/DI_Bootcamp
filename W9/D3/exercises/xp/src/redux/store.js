import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice.js";

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
});