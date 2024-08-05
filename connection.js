const mysql = require('mysql2');

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"resturant"
});
connection.connect((err)=>{
    if(!err)
    {
        console.log(" db connected");
    }
    else
        console.log(err);
    
});
module.exports=connection ;