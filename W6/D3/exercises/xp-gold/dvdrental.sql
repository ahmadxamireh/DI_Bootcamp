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

-- Exercise 1: DVD Rentals

-- 1. Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?

SELECT *
FROM rental
WHERE return_date IS NULL;

-- 2. Get a list of all customers who have not returned their rentals. Make sure to group your results.

SELECT c.first_name || ' ' || c.last_name AS customer_name,
       COUNT(*)                           AS total_books_not_returned
FROM customer c
         JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id;

-- 3. Get a list of all the Action films with Joe Swank.

SELECT f.title, f.description, c.name AS genre, a.first_name || ' ' || a.last_name AS actor_name
FROM film f
         JOIN film_category fc ON f.film_id = fc.film_id
         JOIN category c ON fc.category_id = c.category_id
         JOIN film_actor fa ON f.film_id = fa.film_id
         JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name ILIKE 'Joe'
  AND a.last_name ILIKE 'Swank'
  AND c.name ILIKE 'Action';
