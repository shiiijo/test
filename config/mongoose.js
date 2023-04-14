//include library 
// mongoose is ODM it creates layer between databse and the developer for the ease of writng code
const mongoose = require("mongoose");

// make connection with your database name
mongoose.connect("mongodb://localhost/socio_development");

// establish connection
const db = mongoose.connection;

// check connection established or not
db.on("error",console.error.bind(console,"database connection failed"));

// on connnection establishment
db.once('open',function(){
console.log("database connected sucsussfully");
});