const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await prisma.review.findMany();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get review by id
const getReviewById = async (req, res) => {
    try {
        const review = await prisma.review.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (review) {
            res.json(review);
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new review
const createReview = async (req, res) => {
    const { bookTitle, author, rating, reviewText } = req.body;
    try {
        const newReview = await prisma.review.create({
            data: { bookTitle, author, rating, reviewText }
        });
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a review
const updateReview = async (req, res) => {
    try {
        const updatedReview = await prisma.review.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        res.json(updatedReview);
    } catch (err) {
        if (err.code === 'P2025') { // Prisma specific error code for record not found
            res.status(404).json({ message: 'Review not found' });
        } else {
            res.status(500).json({ message: 'An error occurred', error: err.message });
        }
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    try {
        const deletedReview = await prisma.review.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json({ message: 'Review deleted successfully', review: deletedReview });
    } catch (err) {
        if (err.code === 'P2025') { // Prisma specific error code for record not found
            res.status(404).json({ message: 'Review not found' });
        } else {
            res.status(500).json({ message: 'An error occurred', error: err.message });
        }
    }
};

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};