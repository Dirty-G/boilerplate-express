let express = require('express');
let app = express();
//console.log("Hello World");

// send hello express
//app.get("/", function(req,res){
//    res.send("Hello Express");
//  })

//Serve an Html file
//app.get("/", function(req, res) {
//    res.sendFile(__dirname + "/views/index.html");
//  })

//serve static assetts
abspath = __dirname +"/public"
app.use("/public", express.static(abspath))































 module.exports = app;
