import React, { useState, useEffect } from "react";

// packages
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";

// api
import { getProductBySlug } from "../api";

// components
import Navbar from "../components/Navbar";
import ProductPage from "../components/Product";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Product = () => {
  const location = useLocation();

  const slug = location.pathname.split("/product/");

  const [product, setProduct] = useState([]);

  console.log("slug", slug[1].split("/")[0]);

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
