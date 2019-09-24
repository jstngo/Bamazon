/*
make a new database
make a table named people (id, name)
make a table named cars (id, car_name)
make a table named parts (id, part_name)
make a table named person_cars (car_id, person_id)
make a table named car_parts (car_id, part_id)
insert 3 celebrities
insert 4 cars
insert 3 car parts
insert 5 records (rows, entries) into person_cars
insert 6 records into car_parts

SHOW DATABASES;
*/

-- DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

/* this is how i connect to a database*/
USE bamazon;

CREATE TABLE products(
    item_id INT(4) NOT NULL, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    product_name VARCHAR(255),
    department_name VARCHAR (255),
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY(item_id) /* if you don't do line 11, you get an error */
);

/* 
	you never insert into a primary key because mysql will insert for you 

		if 100 people insert at the sametime you're going to have a hard time figuring out which number to put in 
*/

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (399, "Logitech HD Pro Webcam C920", "Webcam", 63.89, 15),
	   (735, "GIGABYTE GeForce GTX 1650 OC 4G Graphics Card", "Graphics Card", 159.99, 28),
	   (264, "Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM", "RAM", 69.99, 22),
	   (411, "ASUS ROG Strix GeForce GTX 1650 Overclocked 4GB Edition", "Graphics Card", 179.99, 17),
	   (803, "Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD", "Storage", 74.91, 11),
	   (172, "Anivia 1080p HD Webcam W8", "Webcam", 26.90, 8),
	   (367, "Crucial Ballistix Sport LT 3200 MHz DDR4 DRAM", "RAM", 77.99, 19),
	   (812, "Samsung 970 EVO 500GB", "Storage", 89.99, 14),
	   (582, "MSI Gaming Radeon RX 570", "Graphics Card", 177.95, 29),
	   (190, "Seagate BarraCuda 2TB Internal Hard Drive HDD", "Storage", 49.99, 14);