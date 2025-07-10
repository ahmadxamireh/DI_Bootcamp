-- Database: users

-- DROP DATABASE IF EXISTS users;

-- CREATE DATABASE users
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
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL,
    username   VARCHAR(50) NOT NULL UNIQUE,
    email      VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE hashpwd
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(50)  NOT NULL,
    CONSTRAINT fk_hashpwd_user FOREIGN KEY (username) REFERENCES users (username) ON DELETE CASCADE,
    password VARCHAR(100) NOT NULL
);