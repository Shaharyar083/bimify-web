import React, { useState, useEffect, Suspense } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaRegImage,
  FaRegImages,
  FaCube,
  FaRegArrowAltCircleDown,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import Slider from "react-slick";

import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import ModalComponent from "../Modal/Modal";
import TagManager from "react-gtm-module";
import { useSelector, useDispatch } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { productToCart } from "../../api";
import { setUser } from "../../redux/reducers/user-reducer";
import { useTranslation } from "react-i18next";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, Center } from "@react-three/drei";
import Image3D from "./Image3D";
import loaderImg from "../../assets/loader/bimroom-loader.svg";
import emptyImage from "../../assets/empty-image.png";

const tabArray = [
  { name: "RENDER", icon: <FaRegImage /> },
  { name: "3D VIEWER", icon: <FaCube /> },
  { name: "PRODUCT IMAGES", icon: <FaRegImages /> },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="right-control" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left-control" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const ProductView = ({ product }) => {
  const { t, i18n } = useTranslation();
  const { accounts } = useMsal();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [active, setActive] = useState(tabArray[0].name);
  const [showModal, setShowModal] = useState(false);
  const [show3DImage, setShow3DImage] = useState(false);
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

  const handleCart = (id) => {
    if (accounts[0]) {
      let payload = {
        tenantId: accounts[0]?.localAccountId,
        name: accounts[0]?.name,
        email: accounts[0]?.username,
        productID: id,
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

  const handleActive = (string) => {
    setActive(string);
  };

  const getImageFromAzureStorage = (image) => {
    return `https://cdn.bimroom.com/images/${image}`;
  };

  const getRImage = product?.meta_data?.find((ele) => ele?.key === "r_image");
  const get3DImage = product?.meta_data?.find((ele) => ele?.key === "glb");
  const getPImage = product?.meta_data?.find((ele) => ele?.key === "p_image");

  useEffect(() => {
    let isCancelled = false;
    setTimeout(() => {
      if (!isCancelled) setShow3DImage(true);
    }, 2000);

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <div className="product-view">
        <div className="tab-wrapper">
          {tabArray.map((data, index) => (
            <div
              className={data.name === active ? "active" : "btn-image-view"}
              onClick={() => {
                handleActive(data.name);
              }}
              key={index}
            >
              {data.icon}
              <span>
                {t(`catalog.${index + 17}`)}
                {/* {data.name} */}
              </span>
            </div>
          ))}
        </div>

        {tabArray[0].name === active && (
          <div className="image-view">
            <img
              src={
                getRImage !== undefined && getRImage?.value !== ""
                  ? getImageFromAzureStorage(getRImage?.value)
                  : getPImage !== undefined && getPImage?.value !== ""
                  ? getImageFromAzureStorage(getPImage?.value)
                  : emptyImage
              }
              alt=""
            />
          </div>
        )}

        {tabArray[1].name === active && (
          <>
            {show3DImage && get3DImage !== undefined ? (
              <div className="image-view" style={{ alignItems: "flex-start" }}>
                <div style={{ position: "relative", width: 500, height: 500 }}>
                  <Canvas>
                    <Suspense fallback={null}>
                      <Stage
                        environment={"warehouse"}
                        intensity={1}
                        shadows={false}
                      >
                        <Image3D image={get3DImage?.value} />
                        <OrbitControls />
                      </Stage>
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            ) : (
              // <div className="image-view" style={{ paddingTop: "150px" }}>
              //   {image?.glb && (
              //     <GLTFModel
              //       src={`https://platformdev123.blob.core.windows.net/testing/${image?.glb}`}
              //     >
              //       <AmbientLight />
              //       <DirectionLight position={{ x: 20, y: 50, z: 100 }} />
              //       <DirectionLight position={{ x: -20, y: 50, z: -100 }} />
              //     </GLTFModel>
              //   )}
              // </div>
              <div className="image-view">
                <img src={loaderImg} alt="" width={50} height={50} />
              </div>
            )}
          </>
        )}

        {tabArray[2].name === active && (
          <div className="slider">
            <Slider {...settings}>
              <div className="slider-image">
                <img
                  src={
                    getPImage !== undefined && getPImage?.value !== ""
                      ? getImageFromAzureStorage(getPImage?.value)
                      : getRImage !== undefined && getRImage?.value !== ""
                      ? getImageFromAzureStorage(getRImage?.value)
                      : emptyImage
                  }
                  alt=""
                />
              </div>

              <div className="slider-image">
                <img
                  src={
                    getPImage !== undefined && getPImage?.value !== ""
                      ? getImageFromAzureStorage(getPImage?.value)
                      : getRImage !== undefined && getRImage?.value !== ""
                      ? getImageFromAzureStorage(getRImage?.value)
                      : emptyImage
                  }
                  alt=""
                />
              </div>
            </Slider>
          </div>
        )}

        <div className="download-save-wrapper">
          <div className="download-btn" onClick={handleModalShow}>
            <FaRegArrowAltCircleDown />
            <span>{t("catalog.16")}</span>
          </div>

          <div className="heart" onClick={() => handleCart(product?.id)}>
            {user?.cart?.includes(product?.id) ? (
              <FaHeart color="#337ab7" />
            ) : (
              <FaRegHeart />
            )}
          </div>
        </div>
      </div>

      <ModalComponent
        name={product?.name}
        showModal={showModal}
        downloadObject={get3DImage?.value}
        modalClose={handleModalClose}
      />
    </>
  );
};

export default ProductView;
