// models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:       { type: String, trim: true },
  email:      { type: String, trim: true, lowercase: true },
  phone:      { type: String, required: true, unique: true },
  password:   { type: String },
  role:       { type: String, enum: ['buyer','seller','admin'], default: 'buyer' },
  isVerified: { type: Boolean, default: false },
  fmcoins:    { type: Number, default: 0 },
  address:    { type: String },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);

