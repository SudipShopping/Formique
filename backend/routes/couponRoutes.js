// routes/couponRoutes.js
const express = require('express');
const { createCoupon, getCoupon } = require('../controllers/couponController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createCoupon);
router.get('/:code', verifyToken, getCoupon);

module.exports = router;

