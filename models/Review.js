const {Schema, model} = require('mongoose');

  const reviewSchema = new Schema({
    name: String,
    image: String,
    description: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  });

const Review = model('Review', reviewSchema);

module.exports = Review;