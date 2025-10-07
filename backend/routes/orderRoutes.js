// routes/orderRoutes.js
const express = require('express');
const {
  createOrder, verifyPayment, getMyOrders,
  getAllOrders, updateOrderStatus
} = require('../controllers/orderController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createOrder);
router.post('/verify', verifyToken, verifyPayment);
router.get('/myorders', verifyToken, getMyOrders);
router.get('/', verifyToken, isAdmin, getAllOrders);
router.patch('/:id/status', verifyToken, isAdmin, updateOrderStatus);

module.exports = router;

