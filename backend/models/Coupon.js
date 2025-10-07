// models/Coupon.js
const mongoose = require('mongoose');
const couponSchema = new mongoose.Schema({
  code:            { type: String, required: true, unique: true },
  discountPercent: { type: Number, required: true },
  isActive:        { type: Boolean, default: true },
  expireDate:      { type: Date },
}, { timestamps: true });
module.exports = mongoose.model('Coupon', couponSchema);

