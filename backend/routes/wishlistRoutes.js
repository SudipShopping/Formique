// routes/wishlistRoutes.js
const express = require('express');
const { getWishlist, addToWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getWishlist);
router.post('/add', verifyToken, addToWishlist);
router.delete('/remove/:productId', verifyToken, removeFromWishlist);

module.exports = router;
