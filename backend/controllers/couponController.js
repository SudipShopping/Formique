// controllers/couponController.js
const Coupon = require('../models/Coupon');

exports.createCoupon = async (req, res, next) => {
  try {
    const { code, discountPercent, expireDate } = req.body;
    const coupon = await Coupon.create({ code, discountPercent, expireDate });
    res.status(201).json(coupon);
  } catch (err) { next(err); }
};

exports.getCoupon = async (req, res, next) => {
  try {
    const { code } = req.params;
    const coupon = await Coupon.findOne({
      code,
      isActive: true,
      expireDate: { $gt: new Date() },
    });
    if (!coupon) return res.status(404).json({ message: 'Coupon invalid or expired' });
    res.json(coupon);
  } catch (err) { next(err); }
};

