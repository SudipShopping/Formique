// controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');

exports.getWishlist = async (req, res, next) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user.id, products: [] });
    }
    res.json(wishlist);
  } catch (err) { next(err); }
};

exports.addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user.id, products: [productId] });
    } else if (!wishlist.products.includes(productId)) {
      wishlist.products.push(productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) { next(err); }
};

exports.removeFromWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (wishlist) {
      wishlist.products = wishlist.products.filter(id => id.toString() !== productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) { next(err); }
};

