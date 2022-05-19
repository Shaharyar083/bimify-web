import React, { useState } from "react";
import { category } from "../../../helper/categoryArray";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../redux/reducers/product-reducer";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(12);
  const [loading, setLoading] = useState(false);

  const handleAllResult = () => {
    setLoading(true);

    setTimeout(() => {
      setShowAll(category.length);
      setLoading(false);
    }, 1000);
  };

  const handleCategory = (name) => {
    dispatch(setCategory(name));
    navigate("/product");
  };

  return (
    <>
      <div className="main-title">{t("categories.1")}</div>
      <div className="item-wrapper">
        <div className="row">
          {category.slice(0, showAll).map((data, i) => (
            <div
              className="col-lg-2 col-md-4 col-sm-6 col-xs-12 single-item"
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
        </div>
      </div>

      {!loading && showAll != category.length && (
        <div className="btn-show" onClick={handleAllResult}>
          Show all products
        </div>
      )}

      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-muted"></div>
        </div>
      )}

      <div className="line"></div>
    </>
  );
};

export default Categories;
