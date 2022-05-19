import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import SearchSection from "../components/Home/SearchSection";
import Footer from "../components/Footer";
import TagManager from "react-gtm-module";

const Home = () => {
  useEffect(async () => {
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
      <SearchSection />
      <Footer />
    </>
  );
};

export default Home;
