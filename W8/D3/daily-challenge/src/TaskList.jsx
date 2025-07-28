import { useState, useContext, useRef } from "react";
import TaskContext from "./TaskContext.jsx";

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext);

    const [ editingId, setEditingId ] = useState(null);
    const editRef = useRef();

    const saveEdit = (id) => {
        dispatch({ type: "EDIT_TASK", payload: { id, text: editRef.current.value } });
        setEditingId(null);
    }

    const filteredTasks = state.tasks.filter(task => {
        if (state.filter === "all") return true;
        if (state.filter === "completed") return task.completed;
        if (state.filter === "active") return !task.completed;
    });

    return (
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    {editingId === task.id ? (
                        <>
                            <input defaultValue={task.text} ref={editRef}/>
                            <button onClick={() => saveEdit(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.text}
                    </span>
                            <button onClick={() => { dispatch({ type: "TOGGLE_TASK", payload: task.id }) }}>
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => setEditingId(task.id)}>
                                Edit
                            </button>
                            <button onClick={() => { dispatch({ type: "DELETE_TASK", payload: task.id }) }}>
                                Delete
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;