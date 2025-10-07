// controllers/reviewController.js
const Review = require('../models/Review');

exports.addReview = async (req, res, next) => {
  try {
    const { productId, rating, comment } = req.body;
    const review = await Review.create({
      user: req.user.id,
      product: productId,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (err) { next(err); }
};

