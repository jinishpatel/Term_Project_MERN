const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controller/productController");

const router = express.Router();

router.route("/product").get(getProducts);
router.route("/product/new").post(createProduct);

module.exports = router;
