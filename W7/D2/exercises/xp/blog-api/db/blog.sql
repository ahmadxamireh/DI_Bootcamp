-- Database: blog

-- DROP DATABASE IF EXISTS blog;

-- CREATE DATABASE blog
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE posts
(
    id      SERIAL PRIMARY KEY,
    title   VARCHAR(50) NOT NULL,
    content TEXT
);