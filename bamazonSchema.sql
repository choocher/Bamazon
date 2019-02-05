DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  itemid INT NOT NULL AUTO_INCREMENT,
  productname VARCHAR(45) NOT NULL,
  departmentname VARCHAR(45) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stockquantity INTEGER NOT NULL,
  PRIMARY KEY (itemid)
);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Hello Kitty Backpack","Toys & Games",15.99,25);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Lego Minecraft Building Set","Toys & Games",14.99,50);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Mary Poppins","Movies",9.99,20);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Gratitude Journal","Books",12.99,12);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Last Black Unicorn","Books",16.99,18);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Hustle Tee","Apparel",11.99,27);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Pilot Retractable Pens","Office",14.99,5);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Canon Printer Ink","Office",54.99,125);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Arrowhead Sparkling Water 12ct Case","Food and Drink",21.99,15);

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Code Name","Toys & Games",20.99,32);

SELECT * FROM bamazon_DB.products;