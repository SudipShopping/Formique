// models/Order.js
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  buyer:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items:         [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity:{ type: Number, default: 1 },
      price:   { type: Number },
    },
  ],
  totalPrice:    { type: Number, required: true },
  paymentMethod: { type: String, enum: ['razorpay','cod'], required: true },
  paymentStatus: { type: String, enum: ['pending','paid'], default: 'pending' },
  status:        { type: String, enum: ['placed','confirmed','shipped','delivered','cancelled'], default: 'placed' },
  razorpayOrderId:{ type: String }, // store Razorpay order ID for verification
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);

