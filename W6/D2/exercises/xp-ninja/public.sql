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

-- Bonus Exercise - Public Database (Continuation of XP)
-- 1. Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.

SELECT first_name, last_name
FROM customers
ORDER BY first_name
OFFSET (SELECT COUNT(*) - 2 FROM customers);
-- Subtracts 2 from the total to figure out how many rows to skip.

-- 2. Use SQL to delete all purchases made by Scott.
-- Answer: we do not have a table that shows what customer purchased what so let's create one:

CREATE TABLE purchases
(
    purchase_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers (customer_id),
    item_id     INT REFERENCES items (item_id)
);

INSERT INTO purchases (customer_id, item_id)
VALUES (1, 3), -- Greg buys a Fan
       (2, 2), -- Sandra buys a Large Desk
       (3, 1), -- Scott buys a Small Desk and a Fan
       (3, 3), -- Scott buys a Fan
       (4, 3), -- Trevor buys a Fan
       (5, 2); -- Melanie buys a Large Desk

-- verifying the inserts above
SELECT p.purchase_id, c.first_name, c.last_name, i.item_name
FROM purchases p
         JOIN customers c ON p.customer_id = c.customer_id
         JOIN items i ON p.item_id = i.item_id;

-- deleting purchases made by Scott
DELETE
FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott');

-- 3. Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
SELECT *
FROM customers
WHERE first_name = 'Scott';
-- Answer: yes he still exists, because we deleted his purchases only, not his own record.

-- 4. Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will appear,
-- although instead of the customer’s first and last name, you should only see empty/blank. (Which kind of join should you use?)
SELECT p.purchase_id, c.first_name, c.last_name
FROM purchases p
         LEFT JOIN customers c ON p.customer_id = c.customer_id;

-- left join to show all purchases, even if the customer data is missing or blank.

-- 5. Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will NOT appear. (Which kind of join should you use?)
SELECT p.purchase_id, c.first_name, c.last_name
FROM purchases p
         JOIN customers c ON p.customer_id = c.customer_id;
