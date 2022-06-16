import React from "react";
import "./view2.scss";
import chair from "../../../assets/wishlist/2.jpg";
import panel from "../../../assets/wishlist/1.jpg";
import brand from "../../../assets/wishlist/brand.png";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/reducers/product-reducer";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const View2 = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (value) => {
    dispatch(setSearch(value));
    navigate("/product");
  };
  return (
    <div className="hero-section-view2">
      <div className="main-container">
        <div className="content">
          <div className="wordCarousel">
            <span>{t("home-heading.1")}</span>
            <div>
              <ul className="flip4">
                <li>{t("word-carasoul.1")}</li>
                <li>{t("word-carasoul.2")}</li>
                <li>{t("word-carasoul.3")}</li>
              </ul>
            </div>
          </div>

          <p className="para">{t("home-para.1")}</p>

          <Link to="/product" className="browse-btn">
            {t("home-button.1")}
          </Link>
        </div>

        <div className="pulse1"></div>
        <div className="h-show1" onClick={() => handleSearch("Armchair")}>
          <div className="p-image">
            <img src={chair} alt="" />
          </div>

          <div className="text">Armchair</div>

          <div className="brand">
            <img src={brand} alt="" />
          </div>
        </div>

        <div className="pulse2"></div>
        <div className="h-show2" onClick={() => handleSearch("Panel")}>
          <div className="p-image">
            <img src={panel} alt="" />
          </div>

          <div className="text">Panel</div>

          <div className="brand">
            <img src={brand} alt="" />
          </div>
        </div>

        <div className="pulse3"></div>
         <div className="h-show3" onClick={() => handleSearch("Armchair")}>
          <div className="p-image">
            <img src={chair} alt="" />
          </div>

          <div className="text">Armchair</div>

          <div className="brand">
            <img src={brand} alt="" />
          </div>
        </div>

        <div className="pulse4"></div>
        <div className="h-show4" onClick={() => handleSearch("Armchair")}>
          <div className="p-image">
            <img src={chair} alt="" />
          </div>

          <div className="text">Armchair</div>

          <div className="brand">
            <img src={brand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View2;
