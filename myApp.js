let express = require('express');
let app = express();
//console.log("Hello World");

// send hello express
//app.get("/", function(req,res){
//    res.send("Hello Express");
//  })

//Serve an Html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  })

//serve static assetts
app.use("/public", express.static(__dirname +"/public"))

//serve json message
app.get("/json", function(req,res){
    res.json({"message": "Hello json"});
  });

var message= 'Hello json';

app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});






























 module.exports = app;
