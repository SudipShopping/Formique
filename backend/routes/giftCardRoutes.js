// routes/giftCardRoutes.js
const express = require('express');
const { createGiftCard, redeemGiftCard } = require('../controllers/giftCardController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createGiftCard);
router.post('/redeem', verifyToken, redeemGiftCard);

module.exports = router;

