import React from "react";
import { brands } from "../../../helper/brandsArray";
import { useTranslation } from "react-i18next";
const Brands = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="main-title">{t("brands.1")}</div>
      <div className="brands-item-wrapper">
        <div className="row">
          {brands.map((data, i) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12 single-item"
              key={i}
            >
              <img src={data.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
