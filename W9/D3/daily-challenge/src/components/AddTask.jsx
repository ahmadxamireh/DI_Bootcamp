import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../redux/slice.js";

export default function AddTask() {
    const dispatch = useDispatch();
    const [ text, setText ] = useState("");
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);

    function handleAdd() {
        if (text !== ''){
            dispatch(addTask({ text, date }));
            setText('');
            setDate(today);
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
                min={today}
                max="2050-12-31"
                onChange={e => setDate(e.target.value)}
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
}