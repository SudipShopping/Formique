// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const authRoutes     = require('./routes/authRoutes');
const userRoutes     = require('./routes/userRoutes');
const productRoutes  = require('./routes/productRoutes');
const orderRoutes    = require('./routes/orderRoutes');
const cartRoutes     = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const reviewRoutes   = require('./routes/reviewRoutes');
const giftCardRoutes = require('./routes/giftCardRoutes');
const couponRoutes   = require('./routes/couponRoutes');
const adminRoutes    = require('./routes/adminRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Route middleware
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/giftcards', giftCardRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/admin', adminRoutes);

// Error handling (catch-all):contentReference[oaicite:11]{index=11}
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

