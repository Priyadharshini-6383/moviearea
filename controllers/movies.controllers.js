
const movie = require("../models/movies.schema.js");



 const MovieRead = (req ,res) => {
res.send("Read the movies");
};

 const MovieCreate = async (req , res) => {


//validate the data

const newMovie = new Movie ({
    title : req.body.title,
    decription : req.body.description,
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

