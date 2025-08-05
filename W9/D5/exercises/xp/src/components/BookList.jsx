import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from "../redux/selectors.js";

export default function BookList() {
    const [ genre, setGenre ] = useState();

    const books = useSelector(state => {
        switch (genre) {
            case "Horror":
                return selectHorrorBooks(state);
            case "Fantasy":
                return selectFantasyBooks(state);
            case "Science Fiction":
                return selectScienceFictionBooks(state);
            default:
                return [];
        }
    });

    const handleSelect = (e) => setGenre(e.target.value);

    return (
        <div>
            <span>Genre: </span>
            <select value={genre} onChange={handleSelect}>
                <option value="">Select a genre</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
            </select>

            {books.map((book) => (
                <div key={book.id} style={{ border: "1px solid red", margin: "1rem" }}>
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                </div>
            ))}
        </div>
    );
}