let express = require('express');
let app = express();
console.log("Hello World");

// send hello express
app.get("/", function(req,res){
    res.send("Hello Express");
  })


































 module.exports = app;
