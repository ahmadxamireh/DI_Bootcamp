import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from "./actions.js";

const initialState = {
    tasks: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [ ...state.tasks, action.payload ] };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task)
            };
        case EDIT_TASK:
            return {
                ...state, tasks: state.tasks.map(task =>
                    task.id === action.payload.id ?
                        { ...task, text: action.payload.text, date: action.payload.date } : task)
            }
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
}