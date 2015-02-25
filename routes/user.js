var express = require('express');
var mongoose = require("mongoose")
var photosFile = require("../photos");
var usersFile = require("../users");
var multiparty = require('multiparty');
var format = require('util').format;
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
    });

    res.render("photos",{photos:photos,id:id});
  })
  .post(function(req,res,next) {
    // var title = req.body.photoTitle;
    // var id = req.body.userId;
    // var photo = req.files.photoFile;
    // var photos = [];
    console.log("posting...")
    var form = new multiparty.Form();
    var image;
    var title;

    form.on('error', next);
    form.on('close', function(){
      res.send(format('\nuploaded %s (%d Kb) as %s'
        , image.filename
        , image.size / 1024 | 0
        , title));
    });

    // listen on field event for title
    form.on('field', function(name, val){
      if (name !== 'title') return;
      title = val;
    });

    // listen on part event for image file
    form.on('part', function(part){
      if (!part.filename) return;
      if (part.name !== 'image') return part.resume();
      image = {};
      image.filename = part.filename;
      image.size = 0;
      part.on('data', function(buf){
        image.size += buf.length;
      });
    });


    // parse the form
    form.parse(req, function(err, fields, files) {
      console.log(err, fields, files);
      if (err) throw err;
    });

    


    // var photo = {
    //   title: title,
    //   src: photo.name,
    //   likes: 0,
    //   id: photosFile.length+1,
    //   user_id: id,
    //   size: photo.size,
    //   type: photo.extension
    // };
    // photosFile.push(photo);
    // fs.writeFileSync("./photos.json",JSON.stringify(photosFile));
    // // res.render("photos", {photos: usersFile[id-1].photos,id:id});
    // photosFile.forEach(function(photo) {
    //   if (photo.user_id == id) {
    //     photos.push(photo);
    //   }
    // });
    // res.render("photos",{photos:photos,id:id});

  });  
  

module.exports = router  
