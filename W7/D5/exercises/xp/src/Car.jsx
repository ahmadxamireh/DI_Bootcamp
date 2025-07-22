import { useState} from "react";

const Car = ({ model }) => {
    const [color, setColor] = useState("black");
    return (
        <h1>This car is {color} {model}</h1>
    );
}

export default Car;