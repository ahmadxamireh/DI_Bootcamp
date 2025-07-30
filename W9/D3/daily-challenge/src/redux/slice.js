import { createSlice } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
    name: 'planner',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload.text, date: action.payload.date });
        },
        editTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = {
                    ...state.tasks[index],
                    text: action.payload.text,
                    date: action.payload.date
                };
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;