
const Movie = require("../models/movies.schema.js");



 const MovieRead = async (req ,res) => {
try {
    const movies = await Movie.find();
     res.json(movies);
}
catch (error) {
     res.status(500).json({message : "error found"});
}
};

const MovieDetail = async (req,res) => {
    
    try {
        const movies =  await Movie.FindById();
        if (Movie == null) {
            res.status(500).json({ message : "Cannot find movie"});
        }
        else {
            res.json (movies);
        }
    } catch (error) {
        res.status(500).json({message : "Error found"});
    }
}

 const MovieCreate = async (req , res) => {


//validate the data

const newMovie = new Movie ({
    title : req.body.title,
    description : req.body.description,
});

try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
}
catch (error) {
    return res.status(400).json({message : "Error found"});
}

};



 const MovieUpdate = (req , res) => {
res.send("update the movies");
};



 const MovieDelete = (req , res) => {
res.send("Delete the movies");
}
module.exports = {MovieRead, MovieCreate , MovieUpdate , MovieDelete};

