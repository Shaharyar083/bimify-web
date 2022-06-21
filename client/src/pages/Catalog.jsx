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
import withURLSync from "../components/Product Page/URLSync";
import { useNavigate, useLocation } from "react-router-dom";

const searchClient = algoliasearch(
  "MLN6C7QSR3",
  "d5d83c9e0103cbfeef63fcd712daa7e3"
);

const Catalog = (props) => {
   const navigate = useNavigate()
  const location = useLocation()
  const [isBackButtonClicked, setBackbuttonPress] = useState(false)
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
          `http://localhost:3000/`
          // `https://bimify-web.netlify.app/`
        );
    }
  }


  return (
    <>
      <Navbar />
      <InstantSearch
        indexName={"wp_posts_product"}
        searchClient={searchClient}
        searchState={props.searchState}
        createURL={props.createURL}
        onSearchStateChange={props.onSearchStateChange}
      >
        <ProductPage />
      </InstantSearch>
      <Footer />
    </>
  );
};

export default withURLSync(Catalog);
