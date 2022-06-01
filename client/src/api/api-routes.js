const SERVER_URL = "https://bimify-web-server.herokuapp.com";

export const API = {
  getUserDetail: SERVER_URL + "/api/user/get",
  addToCart: SERVER_URL + "/api/user/addtocart",
  addReviewAndRating: SERVER_URL + "/api/product/add-review-and-rating",
  getReviewAndRating: SERVER_URL + "/api/product/get-review-and-rating",
  getProductBySlug: SERVER_URL + "/api/product/get/slug",
  getProductByIDs: SERVER_URL + "/api/product/get/ids",
};
