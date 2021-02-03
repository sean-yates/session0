const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: String,
    created: {
      type: Date,
      default: () => Date.now()
    },
    edited: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
       },
})


const characterSchema = new Schema({
    name: String,
    image: String,
    created: {
      type: Date,
      default: () => Date.now()
    },
    system: String,
    class: String,
    intro: String,
    height: String,
    weight: String,
    description: String,
    about: String,
    edited: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
       },
    comments: [commentSchema],    
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Character', characterSchema);