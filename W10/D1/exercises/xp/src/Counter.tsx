import React, {useState} from 'react';

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount(count + 1);
    }

    const decrement = (): void => {
        setCount(count - 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => decrement()}>-1</button>
        </>
    );
}