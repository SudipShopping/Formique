// models/Cart.js
const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items:     [
    {
      product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true, min: 1, default: 1 },
      price:    { type: Number },
    },
  ],
  totalBill: { type: Number, default: 0 },
}, { timestamps: true });
module.exports = mongoose.model('Cart', cartSchema);

