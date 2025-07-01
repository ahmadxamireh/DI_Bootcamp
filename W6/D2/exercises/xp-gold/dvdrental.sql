-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- Exercises XP Gold:
-- 1. Find out how many films there are for each rating.
SELECT rating, COUNT(*)
FROM film
GROUP BY rating;

-- 2. Get a list of all the movies that have a rating of G or PG-13.
SELECT rating, title
FROM film
WHERE rating IN ('G', 'PG-13');

-- 3. Filter this list further: look for only movies that are under 2 hours long,
-- and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT rating, title, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title;

-- 4. Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer
SET first_name  = 'Ahmad',
    last_name   = 'Amireh',
    email       = 'ahmad.amireh@gmail.com',
    address_id  = 1,
    create_date = '2025-07-01'
WHERE customer_id = 1;

-- 5. Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE address
SET address     = '123X',
    address2    = '456Y',
    district    = 'Jer',
    city_id     = 1,
    postal_code = '789Z',
    phone       = '123-456-7890'
WHERE address_id = (SELECT address_id FROM customer WHERE first_name = 'Ahmad' AND last_name = 'Amireh');
