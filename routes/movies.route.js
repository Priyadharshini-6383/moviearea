const express = require("express");
const router = express.Router();


const {MovieRead, MovieDetail , MovieCreate, MovieUpdate, MovieDelete} = require("../controllers/movies.controllers.js");



//read
router.get('/' ,MovieRead);

// find by id

router.get('/:id' , MovieDetail);

// create
router.post('/',MovieCreate);



// update
router.put('/:id' ,MovieUpdate);

// delete
router.delete('/:id' , MovieDelete);


module.exports = router;