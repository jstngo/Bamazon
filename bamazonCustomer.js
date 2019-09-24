var mysql = require('mysql');

// Load the NPM Package inquirer
var inquirer = require('inquirer');

var Table = require('cli-table');

// mysql -u root -p

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'superpassword',
    database: 'bamazon',
    port: 3306
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

function showProducts() {

    var query = "SELECT * FROM products";
    
    connection.query(query, function (err, res) {
        
        if (err) throw err;

        var showTable = new Table({

            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10, 35, 15, 10, 15]

        });
        for (i = 0; i < res.length; i++) {
            showTable.push([

                res[i].item_id, 
                res[i].product_name, 
                res[i].department_name, 
                res[i].price, 
                res[i].stock_quantity
            
            ]);
        }
        console.log(showTable.toString());
        options();
    })
};

function options() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Which item would you like to buy?",
            filter: Number
        },
        {
            name: "Quantity",
            type: "Input",
            message: "How many units of the product would you like to buy?",
            filter: Number
        },

    ]).then(function (userInput) {

        var userQuantity = userInput.Quantity;

        var userRequest = userInput.ID;

        purchasedFromInventory(userRequest, userQuantity);

    });
};

function purchasedFromInventory(userRequest, userQuantity) {

    connection.query(

        'SELECT * FROM products WHERE item_id = ' + userRequest, 
        
        function (err, res) {

        if (err) { console.log(err) };

        if (userQuantity <= res[0].stock_quantity) {
            
            var totalCost = res[0].price * userQuantity;
            
            console.log("Your item is available!");
            console.log("Your total cost for " + userQuantity + " " + res[0].product_name + " is " + totalCost)

            connection.query('UPDATE products SET stock_quantity = stock_quantity + ' + userQuantity + 'WHERE item_id = ' + res[0].item_id);
        
        } else {
            
            console.log("Insufficient quantity!")
        
        }

        showProducts();
    });
};

showProducts();