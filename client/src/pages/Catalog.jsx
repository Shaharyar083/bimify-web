import React, { useState, useEffect } from "react";

// packages
import TagManager from "react-gtm-module";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllFilters } from "../redux/reducers/product-reducer";

// components
import Navbar from "../components/Navbar";
import ProductPage from "../components/Product Page";
import Footer from "../components/Footer";

const searchClient = algoliasearch(
  "MLN6C7QSR3",
  "d5d83c9e0103cbfeef63fcd712daa7e3"
);

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/product",
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetAllFilters());
    };
  }, []);

  return (
    <>
      <Navbar />
      <InstantSearch
        indexName={"wp_posts_product"}
        searchClient={searchClient}
        // searchState={{
        //   query: "iphone",
        //   refinementList: {
        //     brand: ["Furniture"],
        //   },
        // }}
      >
        <ProductPage />
      </InstantSearch>
      <Footer />
    </>
  );
};

export default Catalog;
