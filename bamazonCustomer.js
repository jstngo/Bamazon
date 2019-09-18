var mysql = require('mysql');

// Load the NPM Package inquirer
var inquirer = require("inquirer");

var Table = require("cli-table");

// mysql -u root -p
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'bamazon',
	port: 3306
});

connection.connect();

function displayProducts() {
	connection.query('SELECT * FROM Products', function (res) {
		var theDisplayTable = new Table({
			head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
			colWidths: [10, 25, 25, 10, 14]
		});
		for (i = 0; i < res.length; i++) {
			theDisplayTable.push(
				[res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
			)
		}
		console.log(theDisplayTable.toString());
	});
};

displayProducts();