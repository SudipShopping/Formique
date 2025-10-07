// routes/reviewRoutes.js
const express = require('express');
const { addReview } = require('../controllers/reviewController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, addReview);

module.exports = router;

