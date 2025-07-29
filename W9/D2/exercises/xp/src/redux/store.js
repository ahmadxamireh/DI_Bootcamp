import { createStore } from "redux";
import todoReducer from "./reducer.js";

const store = createStore(todoReducer);

export default store;