const express = require("express");
const app = express();

const PORT = 3000 ;



const movieroute = require("./routes/movies.route");

app.get('/' , (req , res) => {
res.json({message : "Hello students!"});
});

app.use('/movies' ,movieroute);

app.listen(PORT , () => {
    console.log(`the message http://localhost : ${PORT}`);
})

