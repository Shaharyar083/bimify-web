import React from "react";

// image's & icon's
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import brand from "../../assets/wishlist/brand.png";

const FavoriteList = ({ cart, handleCart, handleModalShow }) => {
  return (
    <div className="favorite-list">
      {cart.length > 0 &&
        cart.map((data, index) => (
          <div className="single-item" key={index}>
            <div className="cross">
              <MdOutlineClose
                onClick={() => {
                  handleCart(data);
                }}
                className="icon"
              />
            </div>

            <div className="p-image">
              <img src={data?.images[0]?.src} alt="" />
            </div>

            <div className="brand-image">
              <img src={brand} alt="" />
            </div>

            <div className="p-name">
              <span>{data.name}</span>
            </div>

            <div className="download">
              <div className="d-btn" onClick={() => handleModalShow(data)}>
                <FaCloudDownloadAlt className="icon" />
                <span>Download</span>
              </div>
            </div>
          </div>
        ))}

      {cart.length === 0 && (
        <div className="no-result">No products added to the wishlist</div>
      )}
    </div>
  );
};

export default FavoriteList;
