var express = require('express');
var mongoose = require("mongoose")
var user = require("../models/user");
var photosFile = require("../photos");
var fs = require("fs");
var router = express.Router();

router.route("/")
  .get(function(req,res,next) {
    res.render("index");
  })
  .post(function(req,res,next) {
    var info = req.body;
    var photo = {
      title: info.title,
      src: info.photo,
      likes: 0,
      id: photosFile.length+1,
      user_id: info.user
    };
    photosFile.push(photo);
    fs.writeFileSync("./photos.json",JSON.stringify(photosFile));
    console.log(photosFile);
    res.send(photosFile);
  });

module.exports = router  
