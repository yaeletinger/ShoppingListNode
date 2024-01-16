const mysql = require("mysql2");

const sqlConfig = {
    host:"localhost",
    user:"root",
    password:"password",
    database:"cart"
}

const sqlCon = mysql.createConnection(sqlConfig);

sqlCon.connect((err) => {
    if(err){return console.log(err)}
    console.log("MYSQL CONNECT CART")
})

module.exports = sqlCon;

