-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE items
(
    item_id   SERIAL PRIMARY KEY,
    item_name VARCHAR(50) NOT NULL,
    price     SMALLINT    NOT NULL
);

INSERT INTO items (item_name, price)
VALUES ('Small Desk', 100),
       ('Large Desk', 300),
       ('Fan', 80);

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson
CREATE TABLE customers
(
    customer_id SERIAL PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL
);

INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
       ('Sandra', 'Jones'),
       ('Scott', 'Scott'),
       ('Trevor', 'Green'),
       ('Melanie', 'Johnson');

-- Exercise 1: Items and customers
-- Use SQL to get the following from the database:
-- 1. All items, ordered by price (lowest to highest).
SELECT *
FROM items
ORDER BY price ASC;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC LIMIT 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A).
SELECT last_name
FROM customers
ORDER BY last_name DESC;
