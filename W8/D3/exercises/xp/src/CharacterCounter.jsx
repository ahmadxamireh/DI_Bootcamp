import { useState, useRef } from "react";

const CharacterCounter = () => {
    const inputRef = useRef(null);
    const [ characterCount, setCharacterCount ] = useState(0);

    const handleInput = () => {
        setCharacterCount(inputRef.current.value.length);
    }

    return (
        <div>
            <input type={"text"} ref={inputRef} onInput={handleInput}/>
            <p>Character count: {characterCount}</p>
        </div>
    );
}

export default CharacterCounter;