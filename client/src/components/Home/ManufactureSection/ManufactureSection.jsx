import React from "react";
import "./manufactureSection.scss";

// components
import LoadMore from "../Load More";

// images
import brands from "../../../assets/images/manufacture/brand.png";

const ManufactureSection = () => {
  return (
    <div className="home-manufacture-section">
      <div className="main-title">Manufacturers</div>

      <div className="brand-image-wrapper">
        <img src={brands} alt="" />
      </div>

      <LoadMore text={"Show all manufactures"} down={true} onClick={() => {}} />
    </div>
  );
};

export default ManufactureSection;
