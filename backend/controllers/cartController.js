// controllers/cartController.js
const Cart = require('../models/Cart');

exports.getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [], totalBill: 0 });
    }
    res.json(cart);
  } catch (err) { next(err); }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { product, quantity, price } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [], totalBill: 0 });
    }
    const itemIndex = cart.items.findIndex(i => i.product.toString() === product);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product, quantity, price });
    }
    cart.totalBill = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    await cart.save();
    res.json(cart);
  } catch (err) { next(err); }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    const { productId } = req.params;
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.items = cart.items.filter(i => i.product.toString() !== productId);
    cart.totalBill = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    await cart.save();
    res.json(cart);
  } catch (err) { next(err); }
};

exports.clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndUpdate({ user: req.user.id }, { items: [], totalBill: 0 });
    res.json({ message: 'Cart cleared' });
  } catch (err) { next(err); }
};

