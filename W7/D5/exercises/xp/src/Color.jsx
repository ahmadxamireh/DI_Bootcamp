import { useEffect, useState } from "react";

const Color = () => {
    const [ favoriteColor, setFavoriteColor ] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
        setTimeout(() => { setFavoriteColor('yellow'); }, 2000);
    }, []);

    const changeFavoriteColor = () => {
        setFavoriteColor('blue');
    }

    return (
        <>
            <h2>My Favorite Color is {favoriteColor}</h2>
            <button onClick={changeFavoriteColor}>Change color</button>
        </>

    );
}

export default Color;