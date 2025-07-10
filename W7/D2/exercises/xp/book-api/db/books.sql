-- Database: books

-- DROP DATABASE IF EXISTS books;

-- CREATE DATABASE books
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE books
(
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(50) NOT NULL,
    author        VARCHAR(50) NOT NULL,
    published_year INTEGER CHECK (published_year >= 1000 AND published_year <= 9999)
);