const allMovies = require("../models/allMovies");

const getAllMovies = async(req, res) => {
    try {
        res.status(200).send(allMovies);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const getSingleMovie = async(req, res) => {
    try {
        const { id } = req.params;
        // const movie = allMovies.find((movie) => movie.id === parseInt(id));
        const movie = allMovies.find((movie) => String(movie.id) === String(id));
        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(404).send("Movie not found");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = { getAllMovies, getSingleMovie };