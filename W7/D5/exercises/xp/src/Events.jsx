import { useState } from 'react';

const clickMe = () => {
    alert('I was clicked');
}

const Events = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${inputValue}`);
        }
    }

    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <br/>
            <input type="text" onKeyDown={handleKeyDown} onChange={(e) => setInputValue(e.target.value)}/>
            <br/>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    );
}

export default Events;