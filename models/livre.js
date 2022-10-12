const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const livreSchema = new Schema({
    author: {
         type: String,
        //  required: true
    },
    country: {
        type: String,
        // required: true
   },
   imageLink: {
    type: String,
    // required: true
},
language: {
    type: String, 
    // required: true
},
link: {
    type: String,
    // required: true
},
pages: {
    type: String,
    // required: true
},
title: {
    type: String,
    // required: true
},
year: {
    type: String,
    // required: true
},


})
const livre = mongoose.model('livre',livreSchema);
module.exports = livre;
