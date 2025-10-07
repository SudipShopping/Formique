// controllers/giftCardController.js
const GiftCard = require('../models/GiftCard');
const User     = require('../models/User');

exports.createGiftCard = async (req, res, next) => {
  try {
    const { code, amount } = req.body;
    const card = await GiftCard.create({ code, amount });
    res.status(201).json(card);
  } catch (err) { next(err); }
};

exports.redeemGiftCard = async (req, res, next) => {
  try {
    const { code } = req.body;
    const card = await GiftCard.findOne({ code });
    if (!card || card.isRedeemed) {
      return res.status(400).json({ message: 'Invalid gift card' });
    }
    const user = await User.findById(req.user.id);
    user.fmcoins += card.amount;
    await user.save();
    card.isRedeemed = true;
    card.redeemedBy  = req.user.id;
    await card.save();
    res.json({ message: 'Gift card redeemed', fmcoins: user.fmcoins });
  } catch (err) { next(err); }
};

