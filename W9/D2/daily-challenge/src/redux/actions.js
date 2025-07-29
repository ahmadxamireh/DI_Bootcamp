// action types
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

// action creators
export const addTask = (text, date) => ({
    type: ADD_TASK, payload: { id: Date.now(), text, date }
});
export const toggleTask = (id) => ({
    type: TOGGLE_TASK, payload: id
});
export const editTask = (id, text, date) => ({
    type: EDIT_TASK, payload: { id, text, date }
});
export const deleteTask = (id) => ({
    type: DELETE_TASK, payload: id
});