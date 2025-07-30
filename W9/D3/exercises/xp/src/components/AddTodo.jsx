import { addTodo } from "../redux/slice.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [ text, setText ] = useState("");

    function handleAdd() {
        if (text !== "") {
            dispatch(addTodo({ id: Date.now(), text, completed: false }));
            setText('');
        }
    }

    return (
        <div>
            <label htmlFor={"addTodo"}>Enter Todo</label>
            <input id={"addTodo"} value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}