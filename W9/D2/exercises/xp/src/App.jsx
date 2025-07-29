import './App.css'
import AddTodo from './components/AddTodo.jsx';
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList/>
        </>
    )
}

export default App
