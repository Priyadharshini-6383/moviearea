const mongoose = require("mongoose");


const schema =  new mongoose.Schema ( {
title :{
    type : String,
    required : true,
},
description :{
    type : String,
    required : true,
},
 });

const Movie = mongoose.model("Movie" , schema);

module.exports = Movie;