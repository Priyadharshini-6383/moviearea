const mongoose = require("mongoose");


const schema =  new mongoose.Schema ({
title : String,
description : String,
});

const Movie = mongoose.model("Movie" , schema);

module.exports = Movie;