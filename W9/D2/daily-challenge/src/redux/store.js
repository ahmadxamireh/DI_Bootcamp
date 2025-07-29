import { createStore } from 'redux';
import taskReducer from "./reducer.js";

const store = createStore(taskReducer);

export default store;