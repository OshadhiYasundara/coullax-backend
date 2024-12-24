const express = require('express');
const router = express.Router();
const {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/review.js');

// Get all reviews
router.get('/', getAllReviews);

// Get review by id
router.get('/:id', getReviewById);

// Add a new review
router.post('/', createReview);

// Update a review
router.put('/:id', updateReview);

// Delete a review
router.delete('/:id', deleteReview);

module.exports = router;