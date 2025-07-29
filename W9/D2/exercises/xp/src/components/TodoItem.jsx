import { useDispatch } from "react-redux";
import { toggleTodo, removeTdo } from "../redux/actions.js";

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}>{todo.text}</span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? "↪️" : "✅"}
            </button>
            <button onClick={() => dispatch(removeTdo(todo.id))}>❌</button>
        </li>
    );
}