import React, { useEffect } from "react";
import "./App.css";
import "./Theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Blog from "./pages/Blog";
import Azure from "./pages/Azure";
import ProductBrandsCollection from "./pages/ProductBrandsCollection";

import { useMsal } from "@azure/msal-react";
import { getUserDetail, getReviewAndRating } from "./api";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducers/user-reducer";
import { setRatingAndReview } from "./redux/reducers/product-reducer";
import { useLocation } from "react-router-dom";
import Practice from "./pages/Practice";

function App() {
  const { instance, accounts } = useMsal();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(async () => {
    if (accounts[0]) {
      try {
        let response = await getUserDetail({ email: accounts[0]?.username });
        dispatch(setUser(response.user));
      } catch (err) {
        dispatch(setUser({}));
        console.log("App page user detail api error =>", err.message);
      }
    } else {
      dispatch(setUser({}));
    }
  }, [accounts[0]]);

  useEffect(async () => {
    try {
      let response = await getReviewAndRating();
      dispatch(setRatingAndReview(response.data));
    } catch (err) {
      console.log("App page get product api error =>", err.message);
    }
  }, []);

  useEffect(() => {
    const temp = window?.location?.href?.split("/");
    const temp1 = temp[3]?.split("=");

    if (temp1?.length > 0 && temp1[0] === "#id_token") {
      instance.logoutRedirect().catch((e) => {
        console.error(e);
      });
    }
  }, [location?.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/product-brands/bimify-collection"
          element={<ProductBrandsCollection />}
        />

        <Route path="/azure" element={<Azure />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
