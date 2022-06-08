import React from "react";
import Card from "./card";
import { Hits, Stats } from "react-instantsearch-dom";

import {
  PaginationAlgolia,
  NoResults,
  CustomCurrentRefinements,
} from "../Widget";

import { useTranslation } from "react-i18next";

const Product = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="product-section">
      {/* <div className="refine-tag-wrapper">
        <CustomCurrentRefinements />
      </div> */}
      <div className="sort-section-wrapper">
      <div className="sort-section">
        <select>
          <option>{t("product.11")}</option>
          <option>{t("product.12")}</option>
          <option>{t("product.13")}</option>
          <option>{t("product.14")}</option>
        </select>

        <select className="show20">
          <option>{t("product.33")}</option>
        </select>
      </div>

       <div className="pagination-wrapper">
        <div className="pagination">
        <PaginationAlgolia />
      </div>
      <div className="result">
          <Stats />
        </div>
       </div>
      </div>

      {/* <div className="product-wrapper ">
        <Card />
      </div> */}
      <Hits hitComponent={Card} />
      <NoResults />

     
    </div>
  );
};

export default Product;
