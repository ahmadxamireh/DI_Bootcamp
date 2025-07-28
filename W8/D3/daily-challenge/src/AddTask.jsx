import { useState, useContext, useRef } from "react";
import TaskContext from "./TaskContext.jsx";

const AddTask = () => {
    const [ text, setText ] = useState('');
    const { dispatch } = useContext(TaskContext);

    const inputRef = useRef();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({ type: 'ADD_TASK', payload: text });
            setText("")
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <input
                type={"text"}
                placeholder={"New Task"}
                value={text}
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
}

export default AddTask;