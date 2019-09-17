var mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected")

});

connection.query("Select * from products", function (err, res) {
  if (err) throw err;
  // not the right table for this. need to change//
  console.table(res);
  orderPurchase();
});

function orderPurchase() {
  inquirer.prompt([
    {
      name: "buy",
      type: "input",
      message: "\n\n please type in the item you would like to purchase"
    },
    {
      name: "amount",
      type: "input",
      message: "\n\n Please type in the amount you would like to purchase"
    }
  ]).then(function (answer) {
    connection.query("select * from products where id = ?", answer.buy, function (err, res) {
      if (err) throw err;

      // console.log(parseInt(answer.amount))
      // console.log(res.stock_quantity)
      if (!res.length) {
        console.log("sorry, please select an item that is in the inventory. Please try again.");
        orderPurchase();
      } else if (parseInt(answer.amount) > parseInt(res[0].stock_quantity)) {
        console.log("sorry selected amount not in the inventory, please try again");
        orderPurchase();
      } else {

// update database
// inform the user " "
// kill the connection//
      }
    })
  })
}