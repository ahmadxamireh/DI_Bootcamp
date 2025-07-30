import { editTask, deleteTask } from "../redux/slice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function TaskItem({ task }) {
    const dispatch = useDispatch();
    const [ text, setText ] = useState("");
    const today = new Date().toISOString().split('T')[0];
    const [ date, setDate ] = useState(task.date);
    const [ editId, setEditId ] = useState(null);

    function handleSave(id) {
        if (text !== "" && date !=="") {
            dispatch(editTask({ id, text, date }));
            setText("");
            setDate("");
            setEditId(null);
        }
    }

    function handleDelete(id) {
        dispatch(deleteTask(id));
    }

    return (
        <li>
            {editId === task.id ? (
                <>
                    <input defaultValue={task.text} onChange={e => setText(e.target.value)}/>
                    <input
                        type="date"
                        value={date}
                        min={today}
                        max="2050-12-31"
                        onChange={e => setDate(e.target.value)}
                    />
                    <button onClick={() => handleSave(task.id)}>Save</button>
                </>
            ) : (
                <>
                    <span>Task: {task.text} | Due: {task.date}</span>
                    <button onClick={() => setEditId(task.id)}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </>
            )}
        </li>
    );
}