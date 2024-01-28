const express = require('express');
const path = require("path");

const app = express();
const home = app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../views/home/index.html")); // need path
    //     res.status(200).json({"message":"Hellllooo World from home.hs"});
});

module.exports = home;