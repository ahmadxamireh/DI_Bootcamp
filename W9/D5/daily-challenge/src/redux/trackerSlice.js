import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Buy groceries",
            description: "Milk, Bread, Eggs",
            completed: false,
            categoryId: 1,
        },
        {
            id: 2,
            title: "Finish report",
            description: "Due by Monday",
            completed: true,
            categoryId: 2,
        },
    ],
    categories: [
        { id: 1, name: "Personal" },
        { id: 2, name: "Work" },
    ],
};

const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index > -1) {
                state.tasks[index] = action.payload;
            }
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        editCategory: (state, action) => {
            const index = state.categories.findIndex((category) => category.id === action.payload);
            if (index > -1) {
                state.categories[index] = action.payload;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload);
        }
    }
});

export const {
    addTask,
    editTask,
    toggleTaskCompletion,
    deleteTask,
    addCategory,
    editCategory,
    deleteCategory
} = trackerSlice.actions;
export default trackerSlice.reducer;