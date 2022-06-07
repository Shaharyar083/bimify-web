import React, { useState } from "react";
import "./productPage.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Filter from "./filter";
import Product from "./product";  

import { useTranslation } from "react-i18next";
  
const ProductPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <div
        className="goback"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaArrowLeft />
        <span>{t("product.1")}</span>
      </div>

      <div className="main-container">
        <Filter />
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
