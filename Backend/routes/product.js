const express = require("express");
<<<<<<< Updated upstream
const { getProducts } = require("../controller/productController");

=======
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
>>>>>>> Stashed changes

const router = express.Router();

router.route("/product").get(getProducts);
<<<<<<< Updated upstream
=======
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getSingleProduct);
>>>>>>> Stashed changes

module.exports = router;
