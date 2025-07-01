-- Database: puzzle

-- DROP DATABASE IF EXISTS puzzle;

-- CREATE DATABASE puzzle
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- Daily Challenge: SQL Puzzle
-- In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.

-- queries
CREATE TABLE FirstTab
(
    id   INTEGER,
    name VARCHAR(10)
);

INSERT INTO FirstTab
VALUES (5, 'Pawan'),
       (6, 'Sharlee'),
       (7, 'Krish'),
       (NULL, 'Avtaar');

SELECT *
FROM FirstTab;

CREATE TABLE SecondTab
(
    id INTEGER
);

INSERT INTO SecondTab
VALUES (5),
       (NULL);

SELECT *
FROM SecondTab;

-- Questions:
-- Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

-- Answer: The result will be 0 because we the condition returns UNKNOWN.
-- (SELECT id FROM SecondTab WHERE id IS NULL) will return (NULL).
-- (NOT IN (NULL) results in UNKNOWN).

-- Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

-- Answer: It will return the total number of records from FirstTab where their ID is not 5.
-- (SELECT id FROM SecondTab WHERE id = 5) will return the record's IDs with ID equal to 5.
-- ID equal to NULL will also be filtered out due to unknown comparison (NOT IN (NULL) results in UNKNOWN).
-- The result will be 2.

-- Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab);

-- Answer: (SELECT id FROM SecondTab) will return (5, NULL)
-- NOT IN (5, NULL) will return UNKNOWN; because any comparison that has NULL will be UNKNOWN.
-- The result will be 0.

-- Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);

-- Answer: (SELECT id FROM SecondTab WHERE id IS NOT NULL) will return (5).
-- NOT IN (5) is valid.
-- The result will be 2 --> NULL is ignored again like mentioned above.
