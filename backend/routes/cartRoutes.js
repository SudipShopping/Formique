// routes/cartRoutes.js
const express = require('express');
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getCart);
router.post('/add', verifyToken, addToCart);
router.delete('/remove/:productId', verifyToken, removeFromCart);
router.delete('/clear', verifyToken, clearCart);

module.exports = router;

