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

-- Exercise 2 – Happy Halloween

-- There is a zombie plague approaching! The DVD rental company is offering to lend all of its DVDs to the local shelters,
-- so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces.
-- Prepare tables with the following data:

-- 1. How many stores there are, and in which city and country they are located.
SELECT s.store_id, a.address, ci.city, co.country
FROM store s
         JOIN address a ON a.address_id = s.address_id
         JOIN city ci ON ci.city_id = a.city_id
         JOIN country co ON co.country_id = ci.country_id;


-- 2. How many hours of viewing time there are in total in each store.
-- In other words, the sum of the length of every inventory item in each store.

SELECT s.store_id, SUM(f.length) / 60 AS total_viewing_hours
FROM store s
         JOIN inventory i ON i.store_id = s.store_id
         JOIN film f ON f.film_id = i.film_id
GROUP BY s.store_id;

-- 3. Make sure to exclude any inventory items which are not yet returned.

SELECT s.store_id, SUM(f.length) / 60 AS total_viewing_hours
FROM store s
         JOIN inventory i ON i.store_id = s.store_id
         JOIN film f ON f.film_id = i.film_id
         JOIN rental r ON r.inventory_id = i.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- 4. A list of all customers in the cities where the stores are located.

SELECT cu.first_name || ' ' || cu.last_name AS customer_name, ci.city
FROM customer cu
         JOIN address a ON a.address_id = cu.address_id
         JOIN city ci ON ci.city_id = a.city_id
WHERE ci.city IN (SELECT ci.city
                  FROM store s
                           JOIN address a ON a.address_id = s.address_id
                           JOIN city ci ON ci.city_id = a.city_id);

-- 5. A list of all customers in the countries where the stores are located.

SELECT cu.first_name || ' ' || cu.last_name AS customer_name, co.country
FROM customer cu
         JOIN address a ON a.address_id = cu.address_id
         JOIN city ci ON ci.city_id = a.city_id
         JOIN country co ON co.country_id = ci.country_id
WHERE co.country IN (SELECT co.country
                     FROM store s
                              JOIN address a ON a.address_id = s.address_id
                              JOIN city ci ON ci.city_id = a.city_id
                              JOIN country co ON co.country_id = ci.country_id);

-- 6. Some people will be frightened by watching scary movies while zombies walk the streets.
-- Create a ‘safe list’ of all movies which do not include the ‘Horror’ category,
-- or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions.
-- Get the sum of their viewing time (length).

-- creating a view to reuse the same query for both questions instead of repeating code.
CREATE VIEW safe_films AS
SELECT f.film_id, f.title, f.description, f.length
FROM film f
         LEFT JOIN film_category fc ON f.film_id = fc.film_id
         LEFT JOIN category c ON fc.category_id = c.category_id
WHERE c.name IS DISTINCT FROM 'Horror'
  AND LOWER(f.title) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%'
  AND LOWER(f.description) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%';

-- solution for 6
SELECT SUM(length) AS safe_total_viewing_time
FROM safe_films;

-- 7. For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
SELECT SUM(length) / 60 AS safe_total_viewing_time_in_hours
FROM safe_films;

SELECT SUM(length) / (60 * 24) AS safe_total_viewing_time_in_days
FROM safe_films;

SELECT SUM(length) AS general_total_viewing_time_in_minutes
FROM film;

SELECT SUM(length) / 60 AS general_total_viewing_time_in_hours
FROM film;

SELECT SUM(length) / (60 * 24) AS general_total_viewing_time_in_days
FROM film;
