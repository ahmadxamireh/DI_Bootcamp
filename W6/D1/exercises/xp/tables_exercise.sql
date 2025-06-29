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
CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(50) NOT NULL,
	price SMALLINT NOT NULL
);

INSERT INTO
	items (item_name, price)
VALUES
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80);

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson
CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);

INSERT INTO
	customers (first_name, last_name)
VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

-- Use SQL to fetch the following data from the database:
-- 1. All the items.
SELECT
	*
FROM
	items;

SELECT
	*
FROM
	customers;

-- 2. All the items with a price above 80 (80 not included).
SELECT
	*
FROM
	items
WHERE
	price > 80;

-- 3. All the items with a price below 300. (300 included)
SELECT
	*
FROM
	items
WHERE
	price <= 300;

-- 4. All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT
	*
FROM
	customers
WHERE
	last_name ILIKE 'Smith';

-- 5. All customers whose last name is ‘Jones’.
SELECT
	*
FROM
	customers
WHERE
	last_name ILIKE 'Jones';

-- 6. All customers whose firstname is not ‘Scott’.
SELECT
	*
FROM
	customers
WHERE
	first_name NOT ILIKE 'Scott';
