const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://bimify.it",
  consumerKey: "ck_e4c8d3b534ba1ec4a90728c04a0e74b37930e64a",
  consumerSecret: "cs_ab90ed6e331eb3a2b8b16607e2b00c50642c890a",
  version: "wc/v3",
});

module.exports = api;
