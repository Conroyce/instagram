var express = require('express');
var mongoose = require("mongoose")
var photosFile = require("../photos");
var fs = require("fs");
var router = express.Router();

router.route("/")
  .get(function(req,res,next) {
    res.render("index");
  })

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
