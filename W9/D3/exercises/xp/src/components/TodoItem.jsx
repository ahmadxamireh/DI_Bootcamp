import { toggleTodo, removeTodo } from "../redux/slice.js";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    function handleToggle(id) {
        dispatch(toggleTodo(id));
    }

    function handleRemove(id) {
        dispatch(removeTodo(id));
    }

    return (
        <li>
            <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'green' : 'cyan'
            }}>{todo.text}</span>
            <button onClick={() => handleToggle(todo.id)}>{todo.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
    );
}