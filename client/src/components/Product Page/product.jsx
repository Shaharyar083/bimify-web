import React from "react";
import Card from "./card";
import { Hits, Stats } from "react-instantsearch-dom";

import {
  PaginationAlgolia,
  NoResults,
  CustomCurrentRefinements,
} from "../Widget";

import Select from 'react-select';

import { useTranslation } from "react-i18next";

const Product = () => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = React.useState();
  const options = [
    { value: t("product.12"), label:t("product.12") },
    { value: t("product.13"), label: t("product.13") },
    { value: t("product.14"), label: t("product.14") },
  ];

  const options2 = [
    { value: t("product.33"), label: t("product.33")},
  ];
  return (
    <div className="product-section">
      {/* <div className="refine-tag-wrapper">
        <CustomCurrentRefinements />
      </div> */}
      <div className="sort-section-wrapper">
      <div className="sort-section">
      <Select
           defaultValue={selectedOption ? selectedOption : {label: "Default Sorting", value: "Default Sorting"} }
        onChange={setSelectedOption}
        options={options}
        className="select"
        isSearchable={false}
      />
        {/* <select>
          <option>{t("product.11")}</option>
          <option>{t("product.12")}</option>
          <option>{t("product.13")}</option>
          <option>{t("product.14")}</option>
        </select> */}

        <Select
        // defaultValue={{label: "Choose one", value: ""}}
        defaultValue={selectedOption ? selectedOption : {label: "Show 20", value: "Show 20"} }
        onChange={setSelectedOption}
        options={options2}
        className="show20"  isSearchable={false}
      />
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
