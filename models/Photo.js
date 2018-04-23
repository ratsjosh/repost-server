var mongoose = require('mongoose')

var photoSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  size: Number,
  photo_url: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('blog', photoSchema)
