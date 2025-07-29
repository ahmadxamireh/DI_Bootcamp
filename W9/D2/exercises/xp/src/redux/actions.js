// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// action creators
export const addTodo = (text) => ({
    type: ADD_TODO, payload: { id: Date.now(), text, completed: false }
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO, payload: id
});
export const removeTdo = (id) => ({
    type: REMOVE_TODO, payload: id
});