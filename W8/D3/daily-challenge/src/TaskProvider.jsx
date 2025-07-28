import { useReducer } from 'react';
import TaskContext from "./TaskContext.jsx";

const initialState = {
    tasks: [],
    filter: "all"
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [ ...state.tasks, { id: Date.now(), text: action.payload, completed: false } ] };
        case "DELETE_TASK":
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case "TOGGLE_TASK":
            return {
                ...state, tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task)
            };
        case "EDIT_TASK":
            return {
                ...state, tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task)
            }
        case "FILTER_TASKS":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

const TaskProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;