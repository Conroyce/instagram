var express = require("express");
var app = express();
var user = require("./routes/user");

app.use(express.static(__dirname+"/assets"));
app.engine('jade',require('jade').__express);
app.set("views","./views");
app.set("view engine", "jade");

app.use("/",user);


var port = "8080";
var server = app.listen(port);
console.log('Instagram app listening at http://10.10.10.10', port);