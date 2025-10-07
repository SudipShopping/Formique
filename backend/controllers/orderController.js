// controllers/orderController.js
const Order = require('../models/Order');
const Razorpay = require('../config/razorpay');
const crypto = require('crypto');

exports.createOrder = async (req, res, next) => {
  try {
    const { items, paymentMethod } = req.body;
    let total = 0;
    items.forEach(item => total += item.price * item.quantity);
    if (paymentMethod === 'razorpay') {
      // Create Razorpay order
      const options = {
        amount: total * 100, // amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`
      };
      const razorpayOrder = await Razorpay.orders.create(options);
      await Order.create({
        buyer: req.user.id,
        items,
        totalPrice: total,
        paymentMethod,
        paymentStatus: 'pending',
        status: 'placed',
        razorpayOrderId: razorpayOrder.id
      });
      return res.json({ orderId: razorpayOrder.id, key: process.env.RAZORPAY_KEY_ID });
    } else {
      // Cash on Delivery
      const order = await Order.create({
        buyer: req.user.id,
        items,
        totalPrice: total,
        paymentMethod,
        paymentStatus: 'pending',
        status: 'placed'
      });
      res.json(order);
    }
  } catch (err) { next(err); }
};

// Verify Razorpay payment signature (HMAC SHA256):contentReference[oaicite:7]{index=7}.
exports.verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const generated = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');
    if (generated === razorpay_signature) {
      const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
      if (order) {
        order.paymentStatus = 'paid';
        await order.save();
      }
      return res.json({ success: true });
    }
    res.status(400).json({ message: 'Invalid signature' });
  } catch (err) { next(err); }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ buyer: req.user.id });
    res.json(orders);
  } catch (err) { next(err); }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) { next(err); }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Not found' });
    order.status = req.body.status;
    await order.save();
    res.json(order);
  } catch (err) { next(err); }
};

