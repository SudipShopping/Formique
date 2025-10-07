// models/Product.js
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  seller:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:       { type: String, required: true },
  description:{ type: String },
  category:   { type: String },
  price:      { type: Number, required: true },
  images:     [{ type: String }], // store URLs from Cloudinary
  stock:      { type: Number, default: 0 },
  isApproved: { type: Boolean, default: false }, // for admin approval
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);

