import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CatalogPage from "../components/Catalog Page";
import Footer from "../components/Footer";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";
import { getProductBySlug } from "../api";
import Loader from "../components/Loader";

const Catalog = () => {
  const location = useLocation();
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
  return (
    <>
      {product.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <CatalogPage product={product[0]} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Catalog;
