const express = require('express');
const app = express();

//ROUTES imports
const home = require("./routes/home");
const movies = require("./routes/movieRoutes")

//Middleware
app.use(express.json());

//ROUTES
app.use('/api', movies);
app.use(home);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!!!d`);
});