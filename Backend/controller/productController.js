<<<<<<< Updated upstream
exports.getProducts = (req, res) =>
{
    res.status(200).json({message: "This is the getProducts route"})
};
=======
const Product = require("../models/productModel");
const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/cacheAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

// Create new product Admin=> /api/v1/admin/product/new
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//get all products => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res) => {
  const resPerPage = 5;
  const productCount = await Product.countDocuments();
  const ApiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  const products = await ApiFeature.query;
  res.status(200).json({ success: true, products, productCount });
});

//get single product details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,

    product,
  });
});

// update product admin => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, product });
});

//Delete Product Admin => /api/v1/admin/product/:id

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product is deleted successfully",
  });
});


//for review purposes i will add it later
>>>>>>> Stashed changes
