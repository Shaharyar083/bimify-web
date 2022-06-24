import React from "react";
import "./featuredObjects.scss";

// components
import LoadMore from "../Load More";

//images
import pic1 from "../../../assets/images/home/pic1.png";
import pic2 from "../../../assets/images/home/pic2.png";
import pic3 from "../../../assets/images/home/pic3.png";
import pic4 from "../../../assets/images/home/pic4.png";
import forwardIcon from "../../../assets/images/icons/forward-icon.png";
import brand from "../../../assets/images/modal/brand.png";

import { useNavigate } from "react-router-dom";

const FeaturedObjects = () => {
  const navigate = useNavigate();
  return (
    <div className="home-featured-section">
      <div className="main-title">Featured Products</div>

      <div className="main-wrapper">
        <div className="left">
          <div className="feature1">
            <div className="brand">
              <img src={brand} alt="" />
            </div>

            <div className="items">58 items</div>

            <div className="p_image">
              <img src={pic1} alt="" />
            </div>

            <div className="view">
              <div className="text" onClick={() => navigate("/product")}>
                View More
              </div>
              <img src={forwardIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="feature2">
            <div className="f2-left">
              <div className="title">New BIM objects</div>

              <div className="view">
                <div className="text" onClick={() => navigate("/product")}>
                  View More
                </div>
                <img src={forwardIcon} alt="" />
              </div>
            </div>

            <div className="f2-right">
              <img src={pic2} alt="" />
            </div>
          </div>

          <div className="sub-feature">
            <div className="feature3">
              <div className="title">Lighting</div>

              <div className="items">95 items</div>

              <div className="p_image">
                <img src={pic3} alt="" />
              </div>

              <div className="view">
                <div className="text" onClick={() => navigate("/product")}>
                  View More
                </div>
                <img src={forwardIcon} alt="" />
              </div>
            </div>

            <div className="feature4">
              <div className="title">HVAC</div>

              <div className="items">178 items</div>

              <div className="p_image">
                <img src={pic4} alt="" />
              </div>

              <div className="view">
                <div className="text" onClick={() => navigate("/product")}>
                  View More
                </div>
                <img src={forwardIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoadMore
        text={true ? "Show all featured Products" : "Hide featured Products"}
        down={true ? true : false}
        onClick={() => {}}
      />
    </div>
  );
};

export default FeaturedObjects;
