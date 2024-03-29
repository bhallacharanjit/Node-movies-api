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

const createMovie = async(req, res) => {
    try {
        const { id, title, description, views, videoUrl, updatedAt, rating } = req.body;
        const newMovie = { id, title, description, views, videoUrl, updatedAt, rating };
        allMovies.push(newMovie);
        res.status(201).send(newMovie);
    } catch (error) {
        res.status(404).send(error.message);
    }
}


const updateMovie = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, description, views, videoUrl, updatedAt, rating } = req.body;
        const movie = allMovies.find((movie) => String(movie.id) === String(id));
        if (movie) {
            if (title) movie.title = title;
            if (description) movie.description = description;
            if (views) movie.views = views;
            if (videoUrl) movie.videoUrl = videoUrl;
            if (updatedAt) movie.updatedAt = updatedAt;
            if (rating) movie.rating = rating;
            res.status(200).send(movie);
        } else {
            res.status(404).send("Movie not found");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }   
}

const deleteMovie = async(req, res) => {
    try {
        const { id } = req.params;
        const movie = allMovies.find((movie) => String(movie.id) === String(id));
        if (movie) {
            const index = allMovies.indexOf(movie);
            allMovies.splice(index, 1);
            res.status(200).send(movie);
        } else {
            res.status(404).send("Movie not found");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}
    


module.exports = { getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie};