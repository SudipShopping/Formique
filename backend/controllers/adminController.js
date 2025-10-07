// controllers/adminController.js
const Product = require('../models/Product');
const Order   = require('../models/Order');
const User    = require('../models/User');

exports.analytics = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments();
    const userCount    = await User.countDocuments();
    const orderCount   = await Order.countDocuments();
    res.json({ productCount, userCount, orderCount });
  } catch (err) { next(err); }
};

