


 const MovieRead = (req ,res) => {
res.send("Read the movies");
};

 const MovieCreate = (req , res) => {
 res.send ("create the movie");
};



 const MovieUpdate = (req , res) => {
res.send("update the movies");
};



 const MovieDelete = (req , res) => {
res.send("Delete the movies");
}
module.exports = {MovieRead, MovieCreate , MovieUpdate , MovieDelete};

