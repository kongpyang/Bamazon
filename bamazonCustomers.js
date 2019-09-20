const mysql = require("mysql");
const inquirer = require("inquirer")

const connection = mysql.createConnection({
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
      name: "id",
      type: "input",
      message: "\n\n please type in the ID of the item you would like to purchase"
    },
    {
      name: "amount",
      type: "input",
      message: "\n\n Please type in the amount you would like to purchase"
    }
  ]).then(function (answer) {

    connection.query("select * from products where id = ?", answer.id, function (err, res) {
      
      // let newAmount = res[0].stock_quantity - answer.newAmount;

      if (err) throw err;
      if (!res.length) {
        console.log("sorry, please select an item that is in the inventory. Please try again.");
        orderPurchase();
      } else if (parseInt(answer.amount) > parseInt(res[0].stock_quantity)) {
        console.log(" Insufficient quantity!, please try again");
        
        orderPurchase();
      } else {

        let totalCost = res[0].price * answer.amount;

        console.log(`Awesome, your total is ${totalCost}`);
        orderPurchase();

      }
      connection.query("UPDATE products quantity SET ? WHERE ?", function(err, data) {
        if (err) throw err;

        [
          {
            stock_quantity: newAmount,
            id: (answer.id)
          }
        
      ]})
    
      inquirer.prompt(
        {
        type: "input",
        name: "buyMore",
        message: "Thank You"       
      }
      
      )
      .then(function (answer) {
        if (answer.buyMore) {
          console.log(orderPurchase());
        }
        else {
          console.log("See You")

          
          // kill the connection//
          connection.end();
        }
      })


    })
  })
}

