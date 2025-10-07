// routes/userRoutes.js
const express = require('express');
const { getProfile, updateProfile, getAllUsers } = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/me', verifyToken, getProfile);
router.put('/me', verifyToken, updateProfile);
router.get('/', verifyToken, isAdmin, getAllUsers);

module.exports = router;

