-- Database: storytelling

-- DROP DATABASE IF EXISTS storytelling;

-- CREATE DATABASE storytelling
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE users
(
    id            SERIAL PRIMARY KEY,
    username      VARCHAR(50)         NOT NULL,
    email         VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT                NOT NULL
);

CREATE TABLE stories
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    content    TEXT         NOT NULL,
    author_id  INT REFERENCES users (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contributors
(
    id       SERIAL PRIMARY KEY,
    story_id INT REFERENCES stories (id),
    user_id  INT REFERENCES users (id)
);