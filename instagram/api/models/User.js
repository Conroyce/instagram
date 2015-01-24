/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      require: true
    },
    email: {
      type: "email",
      require: true
    },
    photos: {
      type: "string"
    },
    following: {
      type: "array"
    }
  }
};

