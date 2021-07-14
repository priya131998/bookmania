const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number, min: 1, max: 5, default: 5
    }}, 
    {
    timestamps: true
  });
 
 const bookSchema = new Schema({
 	title: {
         type: String,
         required: true
     },
 	publish: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
          }
     },
 	author: {
         type: [String]
     },
 	description: {
         type: String
     },
    link: {
        type: String
    },
    reviews: [reviewSchema]
    
 }, {
    timestamps: true
 });


  
 module.exports = mongoose.model('Book', bookSchema);
