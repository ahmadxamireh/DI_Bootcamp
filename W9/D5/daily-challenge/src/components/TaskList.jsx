import { useCallback, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskCompletion, editTask, } from "../redux/trackerSlice.js";
import { selectAllCategories, selectAllTasks, selectTasksByCategory, } from "../redux/selectors.js";

export default function TaskList() {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const [ selectedCategoryId, setSelectedCategoryId ] = useState(0);

    const emptyTasks = useMemo(() => [], []);
    const tasks = useSelector((state) =>
        selectedCategoryId === 0
            ? emptyTasks
            : selectTasksByCategory(selectedCategoryId)(state)
    );

    const handleToggle = useCallback(
        (id) => dispatch(toggleTaskCompletion(id)),
        [ dispatch ]
    );

    const handleDelete = useCallback(
        (id) => dispatch(deleteTask(id)),
        [ dispatch ]
    );

    const handleEdit = useCallback(
        (task) => {
            const newTitle = prompt("New title:", task.title);
            if (newTitle) {
                dispatch(editTask({ ...task, title: newTitle }));
            }
        },
        [ dispatch ]
    );

    return (
        <div>
            <h2>Task List</h2>

            <label htmlFor="category-select">Category:</label>
            <select
                id="category-select"
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
            >
                <option value={0}>-- Select category --</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                        />
                        <strong>{task.title}</strong> — {task.description}
                        <button onClick={() => handleEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}