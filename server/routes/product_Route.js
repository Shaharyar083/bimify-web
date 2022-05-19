const router = require("express").Router();
const {
  addReviewAndRating,
  getReviewAndRating,
  getProductBySlug,
  getProductByID,
} = require("../controllers/product_Controller");

router.post("/add-review-and-rating", addReviewAndRating);
router.get("/get-review-and-rating", getReviewAndRating);
router.post("/get/slug", getProductBySlug);
router.post("/get/ids", getProductByID);

module.exports = router;
