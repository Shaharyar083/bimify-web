const Product_Model = require("../models/product_Model");
const api = require("../config/wooCommerceApi");

const addReviewAndRating = async (req, res) => {
  try {
    let { email, productID, rating, review } = req.body;

    const productExist = await Product_Model.findOne({ productID });

    if (!productExist) {
      const data = new Product_Model({
        productID,
        rating,
        reviews: [
          {
            email,
            rating,
            review,
          },
        ],
      });

      const response = await data.save();
      res.status(200).json({ data: response });
    }

    const response = await Product_Model.findOneAndUpdate(
      { productID },
      {
        $set: {
          rating: (rating + productExist.rating) / 2,
          reviews: [
            ...productExist.reviews,
            {
              email,
              rating,
              review,
            },
          ],
        },
      },
      { new: true }
    );

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const getReviewAndRating = async (req, res) => {
  try {
    const result = await Product_Model.find();
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const result = await api.get(`products/?slug=${req.body.slug}`);
    res.status(200).json({ data: result.data });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const getProductByID = async (req, res) => {
  try {
    let { productIDs } = req.body;

    let temp = [];

    for (let i = 0; i < productIDs.length; i++) {
      let result = await api.get(`products/${productIDs[i]}`);
      temp = [...temp, result.data];
    }

    // const result = await api.get(`products/${req.body.productID}`);
    res.status(200).json({ data: temp });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

module.exports = {
  addReviewAndRating,
  getReviewAndRating,
  getProductBySlug,
  getProductByID,
};
