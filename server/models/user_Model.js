const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  tenantId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  cart: {
    type: Array,
  },
});

module.exports = mongoose.model("user", schema);
