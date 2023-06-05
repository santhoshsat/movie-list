const express = require('express');
const router = express.Router();
const Movie = require('../controller/movie')

// methods
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({ message: 'Movie added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the movie.' });
  }
});

// get method
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found.' });
    }
    res.json({ message: 'Movie updated successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the movie.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found.' });
    }
    res.json({ message: 'Movie deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the movie.' });
  }
});


module.exports = router;