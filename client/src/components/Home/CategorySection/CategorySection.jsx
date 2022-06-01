import React, { useState } from "react";
import "./categorySection.scss";

// packages
import { useDispatch } from "react-redux";
import { setCategory } from "../../../redux/reducers/product-reducer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// components
import LoadMore from "../Load More";

// constants
import { CATEGORY } from "../../../constants/category";

const CategorySection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(6);

  const toggleResultShow = () => {
    setShowAll(showAll === CATEGORY.length ? 6 : CATEGORY.length);
  };

  const handleCategory = (name) => {
    dispatch(setCategory(name));
    navigate("/product");
  };

  return (
    <div className="home-category-section">
      <div className="main-title">Browse By Category</div>
      <div className="item-wrapper">
        <div className="row">
          {CATEGORY.slice(0, showAll).map((data, idx) => (
            <div
              className="col-lg-2 col-md-4 col-sm-6 col-xs-12 single-item"
              key={idx}
              onClick={() => handleCategory(data.label)}
            >
              <img src={data.icon} alt="" />
              <div className="text">{t(`categoryproduct.${idx + 1}`)}</div>
            </div>
          ))}
        </div>
      </div>

      <LoadMore
        text={
          showAll !== CATEGORY.length
            ? "Show all categories"
            : "Hide categories"
        }
        down={showAll !== CATEGORY.length ? true : false}
        onClick={toggleResultShow}
      />
    </div>
  );
};

export default CategorySection;
