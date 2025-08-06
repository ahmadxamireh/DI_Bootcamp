import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from './trackerSlice.js';

export const store = configureStore({
    reducer: {
        tracker: trackerReducer
    }
});
