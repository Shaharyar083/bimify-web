import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.scss";
import { useTranslation } from "react-i18next";

const Select = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="sort-section">
        <select
          onChange={() => {
            navigate("/product");
          }}
        >
          <option>{t("product-brand-c.1")}</option>
          <option>{t("product-brand-c.2")}</option>
          <option>{t("product-brand-c.3")}</option>
          <option>{t("product-brand-c.4")}</option>
        </select>

        <div className="result">{t("product-brand-c.5")}</div>
      </div>
    </>
  );
};

const Main = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="product-brands-collection-page">
      <div className="main-title">{t("product-brand-c.6")}</div>

      <Select />

      <div className="ajax">
        [ajax_load_more woocommerce="true" posts_per_page="6"]
      </div>

      <Select />
    </div>
  );
};

export default Main;
