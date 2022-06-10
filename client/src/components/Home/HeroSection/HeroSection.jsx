import React from "react";
import "./heroSection.scss";

// packages
import Slider from "react-slick";

// components
import View1 from "./View1";
import View2 from "./View2";

const HeroSection = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="carousel">
        <View2 />
        <View1 />
      </Slider>
    </div>
  );
};

export default HeroSection;
