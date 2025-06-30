-- Database: Hollywood
-- DROP DATABASE IF EXISTS "Hollywood";
-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
);

INSERT INTO
	actors (first_name, last_name, age, number_oscars)
VALUES
	('Matt', 'Damon', '08/10/1970', 5),
	('George', 'Clooney', '06/05/1961', 2),
	('Leonardo', 'DiCaprio', '1974-11-11', 1),
	('Denzel', 'Washington', '1954-12-28', 2),
	('Kate', 'Winslet', '1975-10-05', 1);

UPDATE actors
SET
	number_oscars = 3
WHERE
	first_name = 'Leonardo';

ALTER TABLE actors
RENAME COLUMN age TO birthdate;

-- 1. Count how many actors are in the table.
SELECT
	COUNT(*)
FROM
	actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO
	actors (first_name, last_name, age, number_oscars)
VALUES
	('Marlon', 'Waynes');

-- explanation: this will throw an error because we are missing two values (age and number of oscars)