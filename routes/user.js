var express = require('express');
var mongoose = require("mongoose")
var photosFile = require("../photos");
var usersFile = require("../users");
var fs = require("fs");
var router = express.Router();

router.route("/")
  .get(function(req,res,next) {
    res.render("index");
  })
  .post(function(req,res) {
    var info = req.body;
    var user = {
      id: usersFile.length+1,
      name: info.name,
      email: info.email,
      photos: [],
      following: []
    };
    usersFile.push(user);
    fs.writeFileSync("./users.json",JSON.stringify(usersFile));
    res.render("photos");
  });

router.route("/:id/photos")
  .get(function(req,res) {
    var id = req.params.id
    var photos = [];
    photosFile.forEach(function(photo) {
      if (photo.user_id == id) {
        photos.push(photo);
      }
    })
    res.render("photos",{photos:photos});
  })  
  

module.exports = router  
