import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogPage from "../components/Blog";
import Footer from "../components/Footer";
import TagManager from "react-gtm-module";

const Blog = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/blog",
      },
    });
  }, []);
  return (
    <>
      <Navbar />
      <BlogPage />
      <Footer />
    </>
  );
};

export default Blog;
