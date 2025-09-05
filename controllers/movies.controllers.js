
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
        const movies =  await Movie.findById(req.params.id);
        if (movies == null) {
            res.status(404).json({ message : "Cannot find movie"});
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



 const MovieUpdate = async (req , res) => { 
    try {

const result = await Movie.findOneAndUpdate (
    { _id : req.params.id},
    {
        title : req.body.title,
        description  : req.body.description,
    },
    {
        new : true,
    },
);
res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : " Error found"});
    }




};



 const MovieDelete = async (req , res) => {
    const movieId = req.params.id;

    //const foundmovie = await Movie.findOne( {_id : movieId});

    try {
         await Movie.deleteOne({_id : movieId});
         res.json({message : "Movie deleted"});
        
    } catch (error) {
        res.status(500).json({message : "Error found"});
    }

}
module.exports = {MovieRead, MovieDetail, MovieCreate , MovieUpdate , MovieDelete};

