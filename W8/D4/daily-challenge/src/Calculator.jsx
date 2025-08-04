import { useState } from "react";

export default function Calculator() {
    const [ leftNum, setLeftNum ] = useState(0);
    const [ rightNum, setRightNum ] = useState(0);
    const [ total, setTotal ] = useState(0);
    const [ operation, setOperation ] = useState("add");

    function handleOperation() {
        switch (operation) {
            case "add":
                setTotal(leftNum + rightNum);
                break;
            case "subtract":
                setTotal(leftNum - rightNum);
                break;
            case "multiply":
                setTotal(leftNum * rightNum);
                break;
            case "divide":
                setTotal(leftNum / rightNum);
                break;
        }
    }

    return (
        <div>
            <input
                type={"number"}
                value={leftNum}
                onChange={e => setLeftNum(Number(e.target.value))}/>
            <input
                type={"number"}
                value={rightNum}
                onChange={e => setRightNum(Number(e.target.value))}/>
            <select value={operation} onChange={e => setOperation(e.target.value)}>
                <option value={"add"}>Add</option>
                <option value={"subtract"}>Subtract</option>
                <option value={"multiply"}>Multiply</option>
                <option value={"divide"}>Divide</option>
            </select>
            <br/>
            <button onClick={handleOperation}>Solve</button>
            <h1>{total}</h1>
        </div>
    );
}