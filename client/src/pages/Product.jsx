import React, { useState, useEffect } from "react";

// packages
import TagManager from "react-gtm-module";
import { useLocation, useNavigate } from "react-router-dom";

// api
import { getProductBySlug } from "../api";

// components
import Navbar from "../components/Navbar";
import ProductPage from "../components/Product";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Product = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [isBackButtonClicked, setBackbuttonPress] = useState(false)
  const slug = location.pathname.split("/product/");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([]);
    getProductBySlug(slug[1].split("/")[0])
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log("product detail page error =>", err.message));
  }, [location.pathname]);

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/product/product-name",
      },
    });
  }, []);


  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    }
  }, []);
  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!isBackButtonClicked) {
        setBackbuttonPress(true)
        window.location.replace(
          // `http://localhost:3000/product`
          `https://bimify-web.netlify.app/product`
        );
    }
  }


  return (
    <>
      {product.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ProductPage product={product[0]} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
