const express = require("express");

const app = express();

const PORT = 3000 ;

app.get('/' , (req , res) => {
res.json({message : "Hello students!"});
});

// read
app.get('/movies' , (req ,res) => {

});

// create
app.post('/movies', (req , res) => {

});

// update
app.put('/movies/:id' , (req , res) => {

});

// delete
app.delete('/movies/:id' , (req , res) => {

});

app.listen(PORT , () => {
    console.log(`the message http://localhost : ${PORT}`);
})

