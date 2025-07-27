import { useReducer } from 'react';
import TaskContext from "./TaskContext.jsx";

const initialState = [];
const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [ ...state, { id: Date.now(), text: action.payload, completed: false } ];
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload)
        case "TOGGLE_TASK":
            return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
        default:
            return state;
    }
}

const TaskProvider = ({ children }) => {
    const [ tasks, dispatch ] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;