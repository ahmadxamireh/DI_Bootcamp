import { useSelector } from 'react-redux';
import TaskItem from "./TaskItem.jsx";
import { useState } from "react";

export default function TasksList() {
    const tasks = useSelector(state => state.tasks);
    const today = new Date().toISOString().split('T')[0];
    const [ date, setDate ] = useState(today);
    const [ showAll, setShowAll ] = useState(true);

    return (
        <>
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show by Date' : 'Show All'}
            </button>
            <input
                type="date"
                value={date}
                min="2025-01-01"
                max="2050-12-31"
                onChange={e => setDate(e.target.value)}
                disabled={showAll}
            />
            <ul>
                {tasks.map(task => {
                    if (showAll || task.date === date) {
                        return (<TaskItem key={task.id} task={task}/>);
                    }
                })}
            </ul>
        </>
    );
}