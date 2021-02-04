const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    image: String,
    system: String,
    class: String,
    intro: String,
    height: String,
    weight: String,
    description: String,
    about: String,
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