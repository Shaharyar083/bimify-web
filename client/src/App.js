import React, { useEffect } from "react";
import "./App.css";
import "./Theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

// packages
import { useMsal } from "@azure/msal-react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducers/user-reducer";
import { setRatingAndReview } from "./redux/reducers/product-reducer";
import { useLocation } from "react-router-dom";

// components
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Blog from "./pages/Blog";

// api's
import { createUser, getUserDetail, getReviewAndRating } from "./api";

function App() {
  const { instance, accounts } = useMsal();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(async () => {
    if (accounts[0]) {
      try {
        await createUser({
          tenantId: accounts[0]?.localAccountId,
          name: accounts[0]?.name,
          email: accounts[0]?.username,
        });

        let response = await getUserDetail({ email: accounts[0]?.username });
        dispatch(setUser(response.user));
      } catch (err) {
        dispatch(setUser({}));
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

  useEffect(() => {
    if (window.performance) {
      if (performance.getEntriesByType("navigation")) {
        if (location.pathname.includes("/productsearch")) {
          window.location.replace(
            // 'http://localhost:3000/product'
            `https://bimifyalgolia.netlify.app/product`
          );
        }
      }
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
