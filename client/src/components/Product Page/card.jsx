import React, { useState } from "react";
import { productToCart } from "../../api";
import ModalComponent from "../Modal/Modal";

// packages
import {
  FaRegHeart,
  FaHeart,
  FaRegStar,
  FaStar,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { Highlight } from "react-instantsearch-dom";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user-reducer";
import TagManager from "react-gtm-module";
import { useTranslation } from "react-i18next";

// images
import brand from "../../assets/product images/brand.png";
import emptyImage from "../../assets/empty-image.png";
import dlcould7 from "../../assets/images/product/dlcould7.png";
import Line32 from "../../assets/images/other/Line32.png";

const Card = ({ hit }) => {
  const { t, i18n } = useTranslation();
  const { accounts } = useMsal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const p_rating = useSelector((store) => store.product.productRatingAndReview);
  const toggleImage = useSelector((store) => store.product.toggleImage);
  const [showModal, setShowModal] = useState(false);
  console.log("user", user)
  console.log("p_rating", p_rating)
  console.log("toggleImage", toggleImage)
  const handleCart = (product) => {
    if (accounts[0]) {
      let payload = {
        tenantId: accounts[0]?.localAccountId,
        name: accounts[0]?.name,
        email: accounts[0]?.username,
        productID: product?.post_id,
      };

      productToCart(payload)
        .then((data) => {
          dispatch(setUser(data.user));
        })
        .catch((err) => console.log("product error =>", err.message));
    } else {
      alert("Please login first...");
    }
  };

  const moveProductDetailPage = (product) => {
    const slug = product.permalink.split("https://bimify.it/product/");
    navigate(`/product/${slug[1]}`);
  };

  const getImageFromAzureStorage = (image) => {
    return `https://cdn.bimroom.com/images/${image}`;
  };

  const handleModalClose = () => setShowModal(false);

  const handleModalShow = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click",
        button: "download",
        product: "productID",
      },
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="p_card">
        <div className="p_header">


        <div className="star">
                <FaStar color="#feb449"  />
                <p>{p_rating[0]?.rating}</p>
          </div>


          <div className="heart" onClick={() => handleCart(hit)}>
            {user?.cart?.includes(hit?.post_id) ? (
              <FaHeart color="#337ab7" />
            ) : (
              <FaRegHeart />
            )}
          </div>

      
        </div>

        <div onClick={() => moveProductDetailPage(hit)}>
          <div className="p_body">
            <div className="thumbnail">
              {toggleImage ? (
                hit?.r_image?.length > 0 && hit?.r_image[0] !== "" ? (
                  <img src={getImageFromAzureStorage(hit?.r_image[0])} alt="" />
                ) : hit?.p_image?.length > 0 && hit?.p_image[0] !== "" ? (
                  <img src={getImageFromAzureStorage(hit?.p_image[0])} alt="" />
                ) : null
              ) : hit?.p_image?.length > 0 && hit?.p_image[0] !== "" ? (
                <img src={getImageFromAzureStorage(hit?.p_image[0])} alt="" />
              ) : hit?.r_image?.length > 0 && hit?.r_image[0] !== "" ? (
                <img src={getImageFromAzureStorage(hit?.r_image[0])} alt="" />
              ) : null}

              {!hit?.p_image && !hit?.r_image && (
                <img src={emptyImage} alt="" />
              )}
            </div>
          
          </div>
        </div>

        <div className="under-image-line">
        <img src={Line32} alt="" /></div>
        <div className="p_title">
              <Highlight attribute="post_title" tagName="mark" hit={hit} />
            </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>

        <div className="download" onClick={handleModalShow}>
          <img src={dlcould7} alt="" className="icon"  />
          <span>{t("product.31")}</span>
        </div>

 
      </div>

      <ModalComponent
        name={hit?.post_title}
        showModal={showModal}
        downloadObject={hit?.glb}
        modalClose={handleModalClose}
      />
    </>
  );
};

export default Card;
