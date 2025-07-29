import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/actions.js";

export default function TaskItem({ task }) {
    const dispatch = useDispatch();

    const today = new Date().toISOString().split('T')[0];
    const [ text, setText ] = useState("");
    const [ date, setDate ] = useState(today);
    const [ editId, setEditId ] = useState(null);

    function startEdit() {
        setEditId(task.id);
        setText(task.text);
        setDate(task.date);
    }

    function saveEdit(id) {
        dispatch(editTask(id, text, date));
        setText('');
        setEditId(null);
    }

    return (
        <li>
            {editId === task.id ? (
                <>
                    <input defaultValue={task.text} onChange={(e) => setText(e.target.value)}/>
                    <input
                        type="date"
                        value={date}
                        min={today}
                        max="2050-12-31"
                        onChange={e => setDate(e.target.value)}
                    />
                    <button onClick={() => saveEdit(task.id)}>Save</button>
                </>
            ) : (
                <>
                <span style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'green' : 'cyan',
                }}>Task: {task.text} | Due: {task.date} </span>
                    <button onClick={() => dispatch(toggleTask(task.id))}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={startEdit}>Edit</button>
                    <button onClick={() => dispatch(deleteTask(task.id))}>
                        Delete
                    </button>
                </>
            )}
        </li>
    );
}