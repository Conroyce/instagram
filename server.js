var express = require("express");
var mongoose = require("mongoose");
var user = require("./routes/user");
var photo = require("./routes/photo")
var photosFile = require("./photos");
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.engine('jade',require('jade').__express);
app.set("views","./views");
app.set("view engine", "jade");

app.use("/",user);
// app.use("/:id/photos",photo);

var port = "8080";
var server = app.listen(port);
console.log('Instagram app listening at http://10.10.10.10', port);