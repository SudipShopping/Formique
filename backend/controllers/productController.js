// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, category, price, stock } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
    const product = await Product.create({
      seller: req.user.id,
      name, description, category, price, stock,
      images,
    });
    res.status(201).json(product);
  } catch (err) { next(err); }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isApproved: true });
    res.json(products);
  } catch (err) { next(err); }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { next(err); }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const updates = req.body;
    if (req.files) {
      updates.images = req.files.map(file => file.path);
    }
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not allowed' });
    }
    Object.assign(product, updates);
    await product.save();
    res.json(product);
  } catch (err) { next(err); }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not allowed' });
    }
    await product.remove();
    res.json({ message: 'Product removed' });
  } catch (err) { next(err); }
};

exports.approveProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    product.isApproved = true;
    await product.save();
    res.json({ message: 'Product approved', product });
  } catch (err) { next(err); }
};

