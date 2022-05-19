const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
  },
  productID: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
  },
});

module.exports = mongoose.model("product", schema);
