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

-- Exercise XP Ninja: DVD Rentals

-- 1. Retrieve all films with a rating of G or PG, which are not currently rented.

SELECT DISTINCT f.title, f.description, f.rating
FROM film f
         JOIN inventory i ON i.film_id = f.film_id
         JOIN rental r ON r.inventory_id = i.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND r.return_date IS NOT NULL;

-- 2. Create a new table which will represent a waiting list for children’s movies.
-- This will allow a child to add their name to the list until the DVD is available (has been returned).
-- Once the child takes the DVD, their name should be removed from the waiting list (ideally using triggers,
-- but we have not learned about them yet. Let’s assume that our Python program will manage this).
-- Which table references should be included?

CREATE TABLE waiting_list
(
    fk_film_id     INT NOT NULL,
    CONSTRAINT fk_film FOREIGN KEY (fk_film_id) REFERENCES film (film_id),
    fk_customer_id INT NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (fk_customer_id) REFERENCES customer (customer_id),
    PRIMARY KEY (fk_film_id, fk_customer_id)
);

-- 3. Retrieve the number of people waiting for each child’s DVD.
-- Test this by adding rows to the table that you created in question 2 above.

-- random values for the sake of testing
INSERT INTO waiting_list (fk_film_id, fk_customer_id)
VALUES (17, 65),
       (98, 20);

SELECT f.title, COUNT(*) AS people_waiting
FROM waiting_list wl
         JOIN film f ON wl.fk_film_id = f.film_id
GROUP BY f.title;
