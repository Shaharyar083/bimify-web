import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import brand from "../../assets/wishlist/brand.png";
import ModalComponent from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user-reducer";
import { productToCart } from "../../api";
import { useTranslation } from "react-i18next";

import "./wishlist.scss";

const WishlistPage = ({ cart, email, Loading }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [image3D, setImage3D] = useState("");

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (data) => {
    const image = data?.meta_data.find((val) => val?.key === "glb");
    setImage3D(image?.value);
    setModalData(data);
    setShowModal(true);
  };

  const handleCart = (product) => {
    Loading();

    let payload = {
      email,
      productID: product?.id,
    };

    productToCart(payload)
      .then((data) => {
        dispatch(setUser(data.user));
      })
      .catch((err) => console.log("product error =>", err.message));
  };

  return (
    <>
      <div className="wishlist-page">
        <div className="main-title">{t("wishlist.1")}</div>

        {cart.length === 0 && (
          <div className="no-result">{t("wishlist.2")}</div>
        )}

        {cart.length > 0 &&
          cart.map((data, index) => (
            <div className="wishlist-list" key={index}>
              <div className="cross">
                <MdCancel
                  onClick={() => {
                    handleCart(data);
                  }}
                />
              </div>

              <div className="p-image">
                <img src={data?.images[0]?.src} alt="" />
              </div>

              <div className="p-name">
                <span>{data.name}</span>
              </div>

              <div className="brand-image">
                <img src={brand} alt="" />
              </div>

              <div className="download">
                <div className="d-btn" onClick={() => handleModalShow(data)}>
                  {t("wishlist.5")}
                </div>
              </div>
            </div>
          ))}
      </div>

      <ModalComponent
        name={modalData?.name}
        showModal={showModal}
        downloadObject={image3D}
        modalClose={handleModalClose}
      />
    </>
  );
};

export default WishlistPage;
