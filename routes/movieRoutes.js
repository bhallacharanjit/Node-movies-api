const express = require('express');
const app = express();

const {getAllMovies, getSingleMovie} = require("../Controllers/movies");
app.get("/movies", getAllMovies);

//Get single movie
app.get("/movies/:id", getSingleMovie)


module.exports = app;