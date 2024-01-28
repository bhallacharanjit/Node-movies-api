const express = require('express');
const app = express();

const {getAllMovies, getSingleMovie} = require("../Controllers/movies");
app.get("/movies", getAllMovies);

//Get single movie
app.get("/movies/:id", getSingleMovie)
app.post("/movies", createMovie);
app.put("/movies/:id", updateMovie);
app.delete("/movies/:id", deleteMovie);


module.exports = app;