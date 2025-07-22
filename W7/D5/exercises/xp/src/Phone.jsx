import { useState } from "react";

const Phone = () => {
    const [ phoneSpecs, setPhoneSpecs ] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });

    const changeColor = () => {
        setPhoneSpecs({ ...phoneSpecs, color: 'blue' });
    }

    return (
        <>
            <h2>My phone is a {phoneSpecs.model}</h2>
            <p>It is a {phoneSpecs.color} {phoneSpecs.model} from {phoneSpecs.year}</p>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}
export default Phone;