var express = require('express');
var mongoose = require("mongoose")
var user = require("../models/user")
var router = express.Router();

router.route("/")
  .get(function(req,res,next) {
    res.render("index");
  })
  .post(function(req,res,next) {
    console.log(req.params);
  });

module.exports = router  
