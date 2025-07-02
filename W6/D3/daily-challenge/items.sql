-- Database: items

-- DROP DATABASE IF EXISTS items;

-- CREATE DATABASE items
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- Daily Challenge: Items and Orders

-- 1. Create a table called product_orders and a table called items.
-- You decide which fields should be in each table, although make sure the items table has a column called price.

-- 2. There should be a one-to-many relationship between the product_orders table and the items table.
-- An order can have many items, but an item can belong to only one order.

-- Create the product_orders table
CREATE TABLE product_orders
(
    order_id      SERIAL PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    order_date    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the items table
CREATE TABLE items
(
    item_id      SERIAL PRIMARY KEY,
    order_id     INT REFERENCES product_orders (order_id) ON DELETE CASCADE,
    product_name VARCHAR(50)    NOT NULL,
    quantity     INT            NOT NULL CHECK (quantity > 0),
    price        NUMERIC(10, 2) NOT NULL CHECK (price >= 0)
);

-- 3. Create a function that returns the total price for a given order.

CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
    RETURNS NUMERIC(10, 2) AS
$$
DECLARE
    total NUMERIC(10, 2);
BEGIN
    SELECT SUM(price * quantity)
    INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN COALESCE(total, 0); -- return 0 if there are no items
END;
$$ LANGUAGE plpgsql;

-- 4. Bonus :
-- Create a table called users.

CREATE TABLE users
(
    user_id  SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);

-- There should be a one-to-many relationship between the users table and the product_orders table.

ALTER TABLE product_orders
    ADD COLUMN user_id INT REFERENCES users (user_id) ON DELETE SET NULL;

-- Create a function that returns the total price for a given order of a given user.

CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
    RETURNS NUMERIC(10, 2) AS
$$
DECLARE
    total NUMERIC(10, 2);
BEGIN
    SELECT SUM(i.price * i.quantity)
    INTO total
    FROM items i
             JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.order_id = p_order_id
      AND po.user_id = p_user_id;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;
