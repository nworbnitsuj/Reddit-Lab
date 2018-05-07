// Add your comment model here
let mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let CommentSchema = new Schema({
  content: String;
  votes: Number
});

let Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
