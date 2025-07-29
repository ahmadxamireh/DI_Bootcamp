import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem.jsx";

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    );
}