const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const moviesRouter = require('./controller/movie');

app.use(express.json());

// Routes
app.get('/',(req,res)=>{
  res.send('Hello world');
})
app.use('/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});