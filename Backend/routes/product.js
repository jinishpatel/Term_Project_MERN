const express = require("express");
<<<<<<< HEAD
<<<<<<< Updated upstream
const { getProducts } = require("../controller/productController");

=======
=======
>>>>>>> 9f736489382723fa0182cb9916caf67d2b67934d
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");
<<<<<<< HEAD
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
>>>>>>> Stashed changes
=======
>>>>>>> 9f736489382723fa0182cb9916caf67d2b67934d

const router = express.Router();

router.route("/product").get(getProducts);
<<<<<<< HEAD
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
=======
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);
>>>>>>> 9f736489382723fa0182cb9916caf67d2b67934d

module.exports = router;
