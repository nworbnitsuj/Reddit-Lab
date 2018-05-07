// Add your textPost model here
let mongoose = require('mongoose');
let Schema = Mongoose.Schema;
let Comment = require('./comment').Schema;

let TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: String,
  comments: [Comment]
});

let TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;
