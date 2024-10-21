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
app.use("/public", express.static(__dirname + "/public"))






























 module.exports = app;
