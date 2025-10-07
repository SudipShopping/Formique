// routes/productRoutes.js
const express = require('express');
const {
  createProduct, getProducts, getProductById,
  updateProduct, deleteProduct, approveProduct
} = require('../controllers/productController');
const { verifyToken, isSeller, isAdmin } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', verifyToken, isSeller, upload.array('images', 5), createProduct);
router.put('/:id', verifyToken, isSeller, upload.array('images', 5), updateProduct);
router.delete('/:id', verifyToken, isSeller, deleteProduct);
// Admin can approve products
router.patch('/:id/approve', verifyToken, isAdmin, approveProduct);

module.exports = router;

