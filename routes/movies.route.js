const express = require("express");
const router = express.Router();

//read
router.get('/movies' , (req ,res) => {
res.send("Read the movies");
});

// create
router.post('/movies', (req , res) => {
 res.send ("create the movie");
});

// update
router.put('/movies/:id' , (req , res) => {
res.send("update the movies");
});

// delete
router.delete('/movies/:id' , (req , res) => {
res.send("Delete the movies");
});


export default router;