const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: String,
  genre: String,
  language: String,
  releasedYear: Number,
  rating: Number
})

const movie = mongoose.model('Movie',movieSchema)

module.exports = movie