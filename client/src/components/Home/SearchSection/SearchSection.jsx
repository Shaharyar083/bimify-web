import React from "react";
import Library from "./library";
import Categories from "./categories";
import Brands from "./brands";

import "./searchSection.scss";

const SearchSection = () => {
  return (
    <div className="search-section">
      <Library />
      <Categories />
      <Brands />
    </div>
  );
};

export default SearchSection;
