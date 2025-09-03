const express = require("express");


import movieroute from "./routes/movies.route.js";

const app = express();

const PORT = 3000 ;

app.get('/' , (req , res) => {
res.json({message : "Hello students!"});
});

app.use('/movies' ,movieroute);

app.listen(PORT , () => {
    console.log(`the message http://localhost : ${PORT}`);
})

