const express = require("express");
const router = express.Router();

//read
router.get('/' , (req ,res) => {
res.send("Read the movies");
});

// create
router.post('/', (req , res) => {
 res.send ("create the movie");
});

// update
router.put('/:id' , (req , res) => {
res.send("update the movies");
});

// delete
router.delete('/:id' , (req , res) => {
res.send("Delete the movies");
});


module.exports = router;