import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// api's
import { getProductByIDs } from "../../api";

// image's & icon's
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import brand from "../../assets/wishlist/brand.png";

const FriendFavoriteList = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  const [cart, setCart] = useState([]);
  const [activeFriendList, setActiveFriendList] = useState("");

  const getCart = (email) => {
    setActiveFriendList(email);
    let temp = user?.friendWishList?.filter((ele) => ele.email === email);

    getProductByIDs({ productIDs: temp[0]?.list }).then((data) => {
      setCart(data.data);
    });
  };

  return (
    <div className="favorite-list">
      {user?.friendWishList?.map((ele) => (
        <div
          className="show-friend-btn"
          style={{
            backgroundColor:
              activeFriendList === ele?.email ? "#f7a928" : "#fff",
            color: activeFriendList === ele?.email ? "#fff" : "#000",
            border:
              activeFriendList === ele?.email
                ? ""
                : "1px solid rgba(196, 196, 196, .25)",
            boxShadow:
              activeFriendList === ele?.email
                ? ""
                : "0px 0px 5px rgba(0, 0, 0, 0.25)",
          }}
          onClick={() => getCart(ele.email)}
        >
          <span>{ele.email}</span>
          {/* <MdOutlineClose className="icon" /> */}
        </div>
      ))}
      {cart.length > 0 &&
        cart.map((data, index) => (
          <div className="single-item" key={index}>
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
              <div
                className="d-btn"
                style={{ margin: "0px !important" }}
                onClick={() => navigate(`/product/${data?.slug}`)}
              >
                <span>View</span>
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

export default FriendFavoriteList;
