import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import {
  FaTimes,
  FaSearch,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { category } from "../../helper/categoryArray";
import Slider from "react-slick";
import "./topNavbar.scss";
import { useDispatch } from "react-redux";
import { setSearch, setCategory } from "../../redux/reducers/product-reducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const TopNavbar = ({ show, handleClose }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [input, setInput] = useState("");

  const handleSearch = () => {
    dispatch(setSearch(input));

    if (location.pathname != "/product") {
      navigate("/product");
    }
    setInput("");
    handleClose();
  };

  const handleCategory = (name) => {
    dispatch(setCategory(name));
    if (location.pathname != "/product") {
      navigate("/product");
    }
    handleClose();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Offcanvas
      show={show}
      placement="top"
      onHide={handleClose}
      name="Enable both scrolling & backdrop"
      backdrop={true}
      scroll={true}
      className="top-navbar-component"
    >
      <div className="wrapper">
        <div className="top">
          <div className="left"></div>

          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="cross" onClick={handleClose}>
            <FaTimes />
          </div>
        </div>

        <div className="title">{t("topnavbar.1")}</div>

        <div className="search-filter">
          <input
            type="text"
            placeholder={t("topnavbar.2")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="icon" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>

        <div className="title">{t("topnavbar.3")}</div>

        <div className="carousel">
          <Slider {...settings}>
            {category.map((data, i) => (
              <div
                className="single-item"
                key={i}
                onClick={() => handleCategory(data.name)}
              >
                <img src={data.image} alt="" />
                <div className="text">
                  {t(`categoryproduct.${i + 1}`)}
                  {/* {data.name} */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Offcanvas>
  );
};

export default TopNavbar;
