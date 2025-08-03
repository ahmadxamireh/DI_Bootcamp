import { useState } from "react";
import List from "./List";

interface Book {
    id: number;
    title: string;
    author: string;
}

const BookList = () => {
    const [books, setBooks] = useState<Book[]>([
        { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
        { id: 2, title: "1984", author: "George Orwell" },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    ]);

    const addBook = () => {
        const newBook: Book = {
            id: books.length + 1,
            title: `New Book ${books.length + 1}`,
            author: "Anonymous",
        };
        setBooks([...books, newBook]);
    };

    return (
        <div>
            <h2>Book List</h2>
            <button onClick={addBook}>Add Book</button>
            <List
                items={books}
                renderItem={(book) => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                    </div>
                )}
            />
        </div>
    );
};

export default BookList;