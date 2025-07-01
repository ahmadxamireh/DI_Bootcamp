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

-- Exercise: Items and customers
-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80
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

-- Part 1:
-- 1. Create a table named purchases. It should have 3 columns:
-- id: the primary key of the table.
-- customer_id: this column references the table customers.
-- item_id: this column references the table items.
-- quantity_purchased: this column is the quantity of items purchased by a certain customer.
CREATE TABLE purchases
(
    id                 SERIAL PRIMARY KEY,
    customer_id        INT,
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
    item_id            INT,
    CONSTRAINT fk_item FOREIGN KEY (item_id) REFERENCES items (item_id),
    quantity_purchased INT
);

-- 2. Insert purchases for the customers, use subqueries:
-- Scott Scott bought one fan.
-- Melanie Johnson bought ten large desks.
-- Greg Jones bought two small desks.

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES ((SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
        (SELECT item_id FROM items WHERE item_name = 'Fan'), 1),
       ((SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
        (SELECT item_id FROM items WHERE item_name = 'Large Desk'), 10),
       ((SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
        (SELECT item_id FROM items WHERE item_name = 'Small Desk'), 2);

-- Part 2:
-- a. Use SQL to get the following from the database:
-- 1. All purchases. Is this information useful to us?
SELECT *
FROM purchases;

-- 2. All purchases, joining with the customers table.
SELECT *
FROM purchases p
         JOIN customers c ON p.customer_id = c.customer_id;

-- 3. Purchases of the customer with the ID equal to 5.
SELECT *
FROM purchases
WHERE customer_id = 5;

-- 4. Purchases for a large desk AND a small desk
SELECT *
FROM purchases
WHERE item_id IN (SELECT item_id FROM items WHERE item_name = 'Large Desk' OR item_name = 'Small Desk');

-- b. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name, Customer last name, Item name.
SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
         JOIN customers c ON p.customer_id = c.customer_id
         JOIN items i ON p.item_id = i.item_id;

-- c. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
INSERT INTO purchases(customer_id, quantity_purchased)
VALUES (1, 5);

-- Answer:
-- The insert works and adds a new purchase. The item_id is NULL because the column definition does not include NOT NULL -> (item_id INT).
-- The foreign key constraint does not prevent NULL values — it only checks values that are not null.
