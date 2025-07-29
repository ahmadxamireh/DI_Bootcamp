import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTask } from "../redux/actions.js";

export default function AddTask() {
    const dispatch = useDispatch();
    const [ text, setText ] = useState("");

    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [minDate] = useState(today);

    function handleAdd() {
        if (text !== ''){
            dispatch(addTask(text, date));
            setText('');
            setDate(minDate);
        }
    }

    return (
        <div>
            <span>Enter Task: </span>
            <input
                type={"text"}
                value={text}
                onChange={e => setText(e.target.value)}/>
            <span> Pick Due Date: </span>
            <input
                type="date"
                value={date}
                min={minDate}
                max="2050-12-31"
                onChange={e => setDate(e.target.value)}
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
}