// routes/adminRoutes.js
const express = require('express');
const { analytics } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/analytics', verifyToken, isAdmin, analytics);

module.exports = router;

