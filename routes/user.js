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
    res.render("photos", {photos: user.photos});
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
    console.log(id);
    res.render("photos",{photos:photos,id:id});
  })
  .post(function(req,res,next) {
    var info = req.body;
    var photo = {
      title: info.title,
      src: info.photo,
      likes: 0,
      id: photosFile.length+1,
      user_id: req.params.id
    };
    photosFile.push(photo);
    fs.writeFileSync("./photos.json",JSON.stringify(photosFile));
    console.log(photosFile);

    res.render("index");
  });  
  

module.exports = router  
