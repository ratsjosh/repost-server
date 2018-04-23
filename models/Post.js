var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  text: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', postSchema)
