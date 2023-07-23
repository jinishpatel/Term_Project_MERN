const Product = require("../models/productModel");
const mongoose = require("mongoose");
// Create new product => /api/v1/admin/product/new

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
exports.getProducts = (req, res) => {
  res.status(200).json({ message: "This is the getProducts route" });
};
