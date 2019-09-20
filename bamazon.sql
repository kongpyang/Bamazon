DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(40) NULL,
  department_name VARCHAR(40) NULL,
  price DECIMAL(40) NULL,
  stock_quantity INTEGER(40) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (10, "TV", "Electronics", 300, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (11, "Radio", "Electronics", 150, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (12, "Computer", "Electronics", 600, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (13, "LapTop", "Electronics", 500, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (14, "GameConsole", "Electronics", 250, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (15, "Fridge", "Electronics", 700, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (16, "Lamp", "Electronics", 100, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (17, "lawnMower", "Electronics", 300, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (18, "Celluar", "Electronics", 300, 5 );

INSERT INTO products (id, product_name, department_name, price,  stock_quantity)
VALUES (18, "Printers", "Electronics", 150, 5 );

SELECT * FROM products;

