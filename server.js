var express = require('express');
const mongoose = require('mongoose');
var app = express();
var port = 3000
const data = require("./db.json");
const book = require('./models/book');
const livre = require('./models/livre');



//connect to the mongodb
const dbURI =  "mongodb+srv://souhail:souhail@cluster0.j5qod.mongodb.net/books"
mongoose.connect(dbURI).then(
  console.log('successssssss')
  
)



app.get('/', function (req, res) {
  res.send(data);
});

app.get('/all-book',(req,res)=> {
  book.find().then((result)=>{
    console.log(result);
    res.send(result);

  }).catch((err) =>{
    console.log(err);
  } ) 
})
app.get('/selection/:title', function(req,res){
  book.findOne({title:req.params.title}).then((result)=>{
    console.log(result);
    res.send(result);

  }).catch((err) =>{
    console.log(err);
  } )

  
} );
// app.post('/sup', function(req,res){
//   console.log(req.body,req.title);
//   book.deleteOne({title:req.title}).then((result)=>{
//     console.log(result);
//     res.send(result);

//   }).catch((err) =>{
//     console.log(err);
//   } )

  
// } );



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})