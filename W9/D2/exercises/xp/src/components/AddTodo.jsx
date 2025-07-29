import { addTodo } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function AddTodo() {
    const [ text, setText ] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div>
            <input type={"text"} value={text} placeholder={"Enter Todo"} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleAdd()}>Add</button>
        </div>
    );
}