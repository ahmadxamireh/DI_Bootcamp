/*
Daily Challenge: Building a Library System with TypeScript Classes and Interfaces

Create a simple library system with TypeScript:

1. Interface Book: Define an interface Book with the following properties:
    - title (string), author (string), isbn (string), publishedYear (number), an optional genre property (string).

2. Class Library: Create a class Library with:
    - A private property books (array of Book).
    - A public method addBook to add a new book to the library.
    - A public method getBookDetails that returns details of a book based on the isbn.

3. Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
    - A readonly property website (string) for the library’s website.
    - A public method listBooks that returns a list of all book titles in the library.

4. Create an instance of DigitalLibrary, add some books to it,
and then print out the details of the books and the list of all book titles.
 */

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    // if the book is in the list return it, if not return a default message.
    public getBookDetails(isbn: string): Book | string {
        const found = this.books.find(book => book.isbn === isbn);
        return found ? found : `Book with ISBN ${isbn} not found.`;
    }

    // added for subclass access; because books property is private
    protected getAllBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    // get all the book titles in the library
    listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

// test

const myDigitalLibrary = new DigitalLibrary("https://mylibrary.com");

myDigitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "1234567890",
    publishedYear: 1949,
    genre: "Dystopian"
});

myDigitalLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "0987654321",
    publishedYear: 1937
});

console.log(myDigitalLibrary.getBookDetails("1234567890"));
console.log(myDigitalLibrary.getBookDetails("0000000000"));

console.log("All book titles:", myDigitalLibrary.listBooks());

console.log("Library Website:", myDigitalLibrary.website);