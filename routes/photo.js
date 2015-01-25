var express = require('express');
var mongoose = require("mongoose")
var photosFile = require("../photos");
var fs = require("fs");
var router = express.Router();

router.route("/:id/photos")
  .get(function(req,res){
    res.render("photos")
    console.log(req.params)
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