// const SERVER_URL = "https://bimify-web-server.herokuapp.com";
// const SERVER_URL = "https://bimify-algolia.herokuapp.com";
// const SERVER_URL = "http://localhost:5000";
const SERVER_URL = "https://api-bimify.herokuapp.com";

export const API = {
  // user
  CREATE_USER: SERVER_URL + "/api/user/create",
  getUserDetail: SERVER_URL + "/api/user/get",
  addToCart: SERVER_URL + "/api/user/addtocart",
  SHARE_LIST_TO_FRIEND: SERVER_URL + "/api/user/friend-list",

  // products
  addReviewAndRating: SERVER_URL + "/api/product/add-review-and-rating",
  getReviewAndRating: SERVER_URL + "/api/product/get-review-and-rating",
  getProductBySlug: SERVER_URL + "/api/product/get/slug",
  getProductByIDs: SERVER_URL + "/api/product/get/ids",
};
