-- Database: tables

-- DROP DATABASE IF EXISTS tables;

-- CREATE DATABASE tables
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- Daily Challenge: Tables Relationships
-- Part 1:

-- 1. Create 2 tables: Customer and Customer profile. They have a One-to-One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns: id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns: id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE customer
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile
(
    id          SERIAL PRIMARY KEY,
    isLoggedIn  BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer (id)
);

-- 2. Insert these customers:
-- John Doe, Jerome Lalu, Lea Rive.

INSERT INTO customer (first_name, last_name)
VALUES ('John', 'Doe'),
       ('Jerome', 'Lalu'),
       ('Lea', 'Rive');

-- 3. Insert these customer profiles, use subqueries:
-- John is logged in
-- Jerome is not logged in

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (TRUE, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')),
       (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

-- 4. Use the relevant types of Joins to display:
-- 4.1. The first_name of the LoggedIn customers

SELECT c.first_name, cp.isLoggedIn
FROM customer c
         JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS TRUE;

-- 4.2. All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

SELECT c.first_name, cp.isLoggedIn
FROM customer c
         LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- 4.3. The number of customers that are not LoggedIn

SELECT COUNT(*) AS total_not_logged_in_customers
FROM customer_profile
WHERE isLoggedIn IS FALSE;

-- Part 2:

-- 1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL.

CREATE TABLE book
(
    book_id SERIAL PRIMARY KEY,
    title   VARCHAR(50) NOT NULL,
    author  VARCHAR(50) NOT NULL
);

-- 2. Insert these books:
-- Alice In Wonderland, Lewis Carroll.
-- Harry Potter, J.K Rowling.
-- To kill a Mockingbird, Harper Lee.

INSERT INTO book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a Mockingbird', 'Harper Lee');

-- 3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age.
-- Make sure that the age is never bigger than 15 (Find an SQL method).

CREATE TABLE student
(
    student_id SERIAL PRIMARY KEY,
    name       VARCHAR(50) NOT NULL UNIQUE,
    age        SMALLINT CHECK ( age < 15 )
);

-- 4. Insert these students:
-- John, 12.
-- Lera, 11.
-- Patrick, 10.
-- Bob, 14.

INSERT INTO student (name, age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);

-- 5. Create a table named Library, with the columns:
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date

-- This table, is a junction table for a Many-to-Many relationship with the Book and Student tables:
-- A student can borrow many books, and a book can be borrowed by many children.
-- book_fk_id is a Foreign Key representing the column book_id from the Book table.
-- student_fk_id is a Foreign Key representing the column student_id from the Student table.
-- The pair of Foreign Keys is the Primary Key of the Junction Table.

CREATE TABLE library
(
    book_fk_id    INT,
    CONSTRAINT fk_book FOREIGN KEY (book_fk_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT,
    CONSTRAINT fk_student FOREIGN KEY (student_fk_id) REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- 6. Add the following 4 records in the junction table, use subqueries.
-- 6.1. the student named John, borrowed the book Alice In Wonderland on the 15/02/2022

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book.book_id FROM book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM student WHERE name = 'John'),
        '2022-02-15');

-- 6.2. the student named Bob, borrowed the book To kill a Mockingbird on the 03/03/2021

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book.book_id FROM book WHERE title = 'To kill a Mockingbird'),
        (SELECT student_id FROM student WHERE name = 'Bob'),
        '2021-03-03');

-- 6.3. the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book.book_id FROM book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM student WHERE name = 'Lera'),
        '2021-05-23');

-- 6.4. the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book.book_id FROM book WHERE title = 'Harry Potter'),
        (SELECT student_id FROM student WHERE name = 'Bob'),
        '2021-08-12');

-- 7. Display the data
-- 7.1. Select all the columns from the junction table.

SELECT *
FROM library;

-- 7.2. Select the name of the student and the title of the borrowed books.

SELECT s.name, b.title AS borrowed_book_title
FROM student s
         JOIN library l ON s.student_id = l.student_fk_id
         JOIN book b ON l.book_fk_id = b.book_id;

-- 7.3. Select the average age of the children that borrowed the book Alice in Wonderland.

SELECT AVG(s.age)
FROM student s
         JOIN library l ON s.student_id = l.student_fk_id
         JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title ILIKE 'Alice in Wonderland';

-- 7.4. Delete a student from the Student table, what happened in the junction table ?
DELETE
FROM student
WHERE name = 'Bob';

-- explanation: the records that reference the deleted student will also be deleted,
-- due to how we set up the foreign key constraint (ON DELETE CASCADE) that means if a student
-- is deleted, the corresponding library record will be deleted as well.
