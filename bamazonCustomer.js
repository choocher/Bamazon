var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
})

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
  makeTable();
})

var makeTable = function(){
  connection.query("SELECT * FROM products", function(err,res){
    for(var i=0; i<res.length; i++){
      console.log(res[i].itemid+" || "+res[i].productname+" || "+res[i].departmentname+" || "+res[i].price+" || "+res[i].stockquantity+"\n"); 
    }
    promptCustomer(res);
  })
}

var promptCustomer = function(res){
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: "What would you like to purchase? [Quit with Q]"
  }]).then(function(answer){
    var correct = false;
// initiates quit function if "Q" is selected
    if(answer.choice.toUpperCase()=="Q"){
      process.exit();
    }
    for(var i=0;i<res.length;i++){
      if(res[i].productname==answer.choice){
        correct = true;
        var product=answer.choice;
        var id=i;
        inquirer.prompt({
          type:"input",
          name: "quant",
          message:"How much would you like to buy?",
          validate: function(value){
            if(isNaN(value)==false){
              return true;
          } else {
            return false;
          }
        }
        }).then(function (answer) {
          if ((res[id].stockquantity - answer.quant) > 0) {
            connection.query("UPDATE products SET stockquantity='" + (res[id].stockquantity - answer.quant) + "' WHERE productname='" + product + "'", function (err, res2) {
              console.log("Product Bought!");
              makeTable();
            })
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
        })
      }
    }
    // If user inputs an invalid product, envokes "Not a valid selection!" & will rerun the prompt
    if(i==res.length && correct==false){
      console.log("Not a valid selection!");
      promptCustomer(res);
    }
  })
}