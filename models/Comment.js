const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
       },
},{
  timestamps: true,
})

module.exports = mongoose.model('Comment', commentSchema);