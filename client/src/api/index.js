import axios from "axios";
import { API } from "./api-routes";

const getUserDetail = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.getUserDetail, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const productToCart = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.addToCart, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getProductBySlug = (slug) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.getProductBySlug, { slug })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getProductByIDs = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.getProductByIDs, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const addReviewAndRating = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.addReviewAndRating, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getReviewAndRating = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.getReviewAndRating, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const createUser = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.CREATE_USER, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const shareListToFriend = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.SHARE_LIST_TO_FRIEND, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export {
  createUser,
  getUserDetail,
  productToCart,
  getProductBySlug,
  getProductByIDs,
  addReviewAndRating,
  getReviewAndRating,
  shareListToFriend,
};
