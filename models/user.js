var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    userSchema = new Schema({
      name: String,
      email: String,
      photos: String,
      following: Array
    }),

    User = mongoose.model('user',userSchema);

module.exports = User;    