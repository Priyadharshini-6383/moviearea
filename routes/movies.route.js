const express = require("express");
const router = express.Router();


const MovieRead = require("./controllers/movies.controllers.js");
const MovieCreate = require("./controllers/movies.controllers.js");
const MovieUpdate = require("./controllers/movies.controllers.js");
const MovieDelete = require("./controllers/movies.controllers.js");


//read
router.get('/' ,MovieRead);

// create
router.post('/',MovieCreate );

// update
router.put('/:id' ,MovieUpdate );

// delete
router.delete('/:id' , MovieDelete);


module.exports = router;