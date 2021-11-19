const { createReview, getReview } = require('../controllers/reviewController');

const router = require('express').Router();

// methods
router.post('/', createReview)
router.get('/', getReview)

module.exports = router;