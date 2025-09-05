const express = require("express");
const router = express.Router();


const {MovieRead, MovieCreate, MovieUpdate, MovieDelete} = require("../controllers/movies.controllers.js");



//read
router.get('/' ,MovieRead);

// create
router.post('/',MovieCreate);

// update
router.put('/:id' ,MovieUpdate);

// delete
router.delete('/:id' , MovieDelete);


module.exports = router;