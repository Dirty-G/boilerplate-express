let express = require('express');
let app = express();
console.log("Hello World");

// send hello express
//app.get("/", function(req,res){
//    res.send("Hello Express");
//  })

// send file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
































 module.exports = app;
