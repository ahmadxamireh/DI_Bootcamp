-- Database: bootcamp
-- DROP DATABASE IF EXISTS bootcamp;
-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- 1. Create a table called students (id, first_name, last_name, birth_date).
-- The id must be auto_incremented.

CREATE TABLE students
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL,
    birth_date DATE        NOT NULL
);

-- insert data in the table
INSERT INTO students(first_name, last_name, birth_date)
VALUES ('Marc', 'Benichou', '02/11/1998'),
       ('Yoan', 'Cohen', '03/12/2010'),
       ('Lea', 'Benichou', '27/07/1987'),
       ('Amelia', 'Dux', '07/04/1996'),
       ('David', 'Grez', '14/06/2003'),
       ('Omer', 'Simpson', '03/10/1980');

-- SELECT questions:
-- 1. Fetch all the data from the table.
SELECT *
FROM students;

-- 2. Fetch all the students first_names and last_names.
SELECT first_name, last_name
FROM students;

-- 3. For the following questions, only fetch the first_names and last_names of the students:
-- a. Fetch the student which id is equal to 2.
SELECT first_name, last_name
FROM students
WHERE id = 2;

-- b. Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name
FROM students
WHERE first_name = 'Marc'
  AND last_name = 'Benichou';

-- c. Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name
FROM students
WHERE first_name = 'Marc'
   OR last_name = 'Benichou';

-- d. Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name
FROM students
WHERE first_name ILIKE '%a%';

-- e. Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name
FROM students
WHERE first_name ILIKE 'a%';

-- f. Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name
FROM students
WHERE first_name ILIKE '%a';

-- g. Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name
FROM students
WHERE first_name ILIKE '%a_';

-- h. Fetch the students whose ids are equal to 1 AND 3.
SELECT first_name, last_name
FROM students
WHERE id = 1
   OR id = 3;

-- 4. Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT *
FROM students
WHERE birth_date >= '01/01/2000';


