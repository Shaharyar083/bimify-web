import React, { useState } from "react";
import "./favorite.scss";

// package's
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// function's
import { setUser } from "../../redux/reducers/user-reducer";

// component's
import MoveBack from "../MoveBack Component";
import FavoriteList from "./FavoriteList";
import FriendFavoriteList from "./FriendFavoriteList";
import DownloadModal from "../Modal/Download";
import ShareListModal from "../Modal/ShareList";

// api's
import { productToCart } from "../../api";

// image's & icon's
import { GrAdd } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const FavoritePage = ({ cart, email, Loading }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [view, setView] = useState(1);
  const [shareModal, setShareModal] = useState(false);
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
      <div className="favorite-page">
        <MoveBack />

        <div className="projects">
          <select
            name="openProject"
            placeholder="Open Project"
            value={"DEFAULT"}
            className="open-project-select"
          >
            <option value="DEFAULT" disabled>
              Open Project
            </option>
          </select>

          <div className="add-project-btn">
            <span>Add new project</span>
            <GrAdd className="icon" />
          </div>
        </div>

        <div className="main-wrapper">
          <div className="tabs-wrapper">
            <div
              className={view === 1 ? "tab tab-active" : "tab"}
              onClick={() => setView(1)}
            >
              <span>Favorites</span>
            </div>

            <div
              className={view === 2 ? "tab tab-active" : "tab"}
              onClick={() => setView(2)}
            >
              <span>Friend Wishlist</span>
            </div>

            <div className="tab">
              <span>Project #1232</span>
              <MdOutlineClose className="icon" />
            </div>
            <div className="tab">
              <span>Project #4241</span>
              <MdOutlineClose className="icon" />
            </div>
          </div>

          {view === 1 && (
            <FavoriteList
              cart={cart}
              handleCart={handleCart}
              handleModalShow={handleModalShow}
            />
          )}

          {view === 2 && (
            <FriendFavoriteList
              cart={cart}
              handleCart={handleCart}
              handleModalShow={handleModalShow}
            />
          )}
        </div>

        <div className="share-list-btn" onClick={() => setShareModal(true)}>
          Share my wishlist
        </div>
      </div>

      <DownloadModal
        name={modalData?.name}
        showModal={showModal}
        downloadObject={image3D}
        modalClose={handleModalClose}
      />

      <ShareListModal
        shareModalOpen={shareModal}
        shareModalClose={() => setShareModal(false)}
      />
    </>
  );
};

export default FavoritePage;
