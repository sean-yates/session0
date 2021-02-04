const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
      type: String,
      maxlength: 20,
    },
    image: String,
    system: {
      type: String,
      maxlength: 20,
    },
    class: {
      type: String,
      maxlength: 20,
    },
    intro: {
      type: String,
      maxlength: 128,
    },
    height: {
      type: String,
      maxlength: 10,
    },
    weight: {
      type: String,
      maxlength: 10,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    about: {
      type: String,
      maxlength: 10000,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
       },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
     }],    
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Character', characterSchema);