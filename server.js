var express = require("express");
var mongoose = require("mongoose");
var user = require("./routes/user");
var app = express();

app.use(express.static(__dirname+"/assets"));
app.engine('jade',require('jade').__express);
app.set("views","./views");
app.set("view engine", "jade");

// app.use("/",user);
app.get("/",function(req, res) {
  res.send("hey");
})

var port = "8080";
var server = app.listen(port);
console.log('Instagram app listening at http://10.10.10.10', port);