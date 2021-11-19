// dependencies
const Review = require('../models/Review');

// create blog
exports.createReview = async (req, res) => {
    const {name, image, description, rating} = req.body;
    const singleReview = new Review({name, image, description, rating})
    
    try {
        const review = await singleReview.save();
        res.json({message: 'Review added successfully'});
    } catch(err) {
        res.json(err)
    }
}

exports.getReview = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch(err) {
        res.json(err)
    }
}