CREATE DATABASE gadget_inventory;
USE gadget_inventory;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE gadgets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  brand VARCHAR(100),
  stock INT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);