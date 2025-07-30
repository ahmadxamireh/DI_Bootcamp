import './App.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <Provider store={store}>
            <AddTodo/>
            <TodoList/>
        </Provider>
    )
}

export default App
