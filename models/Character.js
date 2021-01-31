const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Character', characterSchema);