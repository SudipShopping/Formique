// models/GiftCard.js
const mongoose = require('mongoose');
const giftCardSchema = new mongoose.Schema({
  code:       { type: String, required: true, unique: true },
  amount:     { type: Number, required: true },  // FMcoin value
  isRedeemed: { type: Boolean, default: false },
  redeemedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
module.exports = mongoose.model('GiftCard', giftCardSchema);

