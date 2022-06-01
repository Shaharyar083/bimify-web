import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

// components
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "../components/Home/CategorySection/CategorySection";
import FeaturedObjects from "../components/Home/FeaturedObjects/FeaturedObjects";
import ManufactureSection from "../components/Home/ManufactureSection/ManufactureSection";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/home",
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedObjects />
      <ManufactureSection />
      <Footer />
    </>
  );
};

export default Home;
