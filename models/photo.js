var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    photoSchema = new Schema({
      title: String,
      src: String,
      likes: Integer
    }),

    Photo = mongoose.model('photo',photoSchema);

module.exports = Photo    
