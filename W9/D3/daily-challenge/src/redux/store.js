import { configureStore } from '@reduxjs/toolkit';
import plannerReducer from './slice.js';

export const store = configureStore({
    reducer: {
        planner: plannerReducer
    }
});