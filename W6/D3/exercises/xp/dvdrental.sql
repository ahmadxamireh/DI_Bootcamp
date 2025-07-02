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

-- Exercises XP - DVD Rental

-- Exercise 1:
-- 1. Get a list of all the languages, from the language table.
SELECT name
FROM language;

-- 2. Get a list of all films joined with their languages – select the following details:
-- film title, description, and language name.
SELECT f.title, f.description, l.name AS movie_language
FROM film f
         JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films in those languages – select the following details:
-- film title, description, and language name.
SELECT f.title, f.description, l.name AS movie_language
FROM film f
         FULL OUTER JOIN language l ON f.language_id = l.language_id;

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO new_film (name)
VALUES ('Inception'),
       ('The Matrix'),
       ('Interstellar'),
       ('Pulp Fiction'),
       ('The Godfather');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
--   review_id: a primary key, non null, auto-increment.
--   film_id: references the new_film table. The film that is being reviewed.
--   language_id: references the language table. What language the review is in.
--   title: the title of the review.
--   score: the rating of the review (1-10).
--   review_text: the text of the review. No limit on the length.
--   last_update: when the review was last updated.

CREATE TABLE customer_review
(
    review_id   SERIAL PRIMARY KEY NOT NULL,
    film_id     INT,
    CONSTRAINT fk_film FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
    language_id INT,
    CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES language (language_id),
    title       VARCHAR(50)        NOT NULL,
    score       SMALLINT CHECK ( score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update DATE DEFAULT CURRENT_DATE
);

SELECT *
FROM customer_review;

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES ((SELECT id FROM new_film WHERE name = 'Inception'),
        (SELECT language_id FROM language WHERE name = 'English'),
        'Inception', 10, 'The idea of time slowing down is phenomenal!!');

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES ((SELECT id FROM new_film WHERE name = 'Pulp Fiction'),
        (SELECT language_id FROM language WHERE name = 'English'),
        'Pulp Fiction', 6, 'I did not enjoy it a lot, not what I was hoping for.');

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE
FROM new_film
WHERE name = 'Pulp Fiction';

-- the customer review of the movie that we deleted gets automatically deleted because of adding ON DELETE CASCADE when linking the tables.

--------------------------------------------------------------
-- Exercise 2:

-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'Italian')
WHERE title = 'Chamber Italian';

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'French Holiday';

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'Japanese')
WHERE title = 'Sleepy Japanese';

-- 2. Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?

-- Answer: 'address_id' is the foreign key referenced in the customer table.
-- The way it affects the way we insert new customers is that each customer will need to have an address id.
-- The relationship between the address and customer tables is (1:N, or 1-to-many), meaning 1 address can
-- have many customers, but a customer can only have 1 address.

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

-- Explanation:
-- This is an easy step because no other table depends on it.
-- The new_film or language tables do not get affected.
-- If a film is deleted from new_film, its review will be deleted automatically due to ON DELETE CASCADE condition.
-- Dropping the reviews table does not affect the new_film table because the foreign keys inside it point outward, not inward.

-- 4. Find out how many rentals are still outstanding (i.e. have not been returned to the store yet).
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- 5. Find the 30 most expensive movies which are outstanding (i.e. have not been returned to the store yet)
SELECT f.title, f.rental_rate, r.return_date
FROM film f
         JOIN inventory i ON f.film_id = i.film_id
         JOIN rental r ON i.inventory_id = r.inventory_id
WHERE return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;;

-- 6. Your friend is at the store, and decides to rent a movie.
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?

-- 6.1. The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title, f.description, a.first_name || ' ' || a.last_name AS actor_name
FROM film f
         JOIN film_actor fa ON f.film_id = fa.film_id
         JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope'
  AND a.last_name = 'Monroe'
  AND f.description ILIKE '%sumo%';

-- 6.2. The 2nd film: A short documentary (less than 1 hour long), rated “R”.
SELECT title, description, length, rating
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';

-- 6.3. The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT f.title, f.description, f.rental_rate, c.first_name || ' ' || c.last_name AS rented_by, r.return_date
FROM film f
         JOIN inventory i ON f.film_id = i.film_id
         JOIN rental r ON i.inventory_id = r.inventory_id
         JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND f.rental_rate > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 6.4. The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT f.title,
       f.description,
       f.rental_rate,
       f.replacement_cost,
       c.first_name || ' ' || c.last_name AS rented_by,
       r.return_date
FROM film f
         JOIN inventory i ON f.film_id = i.film_id
         JOIN rental r ON i.inventory_id = r.inventory_id
         JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
