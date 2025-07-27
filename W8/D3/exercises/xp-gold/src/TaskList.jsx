import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.text}
                    <button onClick={() => { dispatch({ type: "TOGGLE_TASK", payload: task.id }) }}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => { dispatch({ type: "DELETE_TASK", payload: task.id }) }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;