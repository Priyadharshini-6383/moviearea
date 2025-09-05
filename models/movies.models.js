const schema = require("mongoose");
const model = require("mongoose");

const Schema =  new Schema ({
title : String,
description : String,
});

const Movie = model("Movie" , Schema);

module.exports = Movie;