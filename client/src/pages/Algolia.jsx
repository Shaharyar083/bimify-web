import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "NQ44UP7DDA",
  "433e1e308abf51af32b16a2530ea37ce"
);

const Algolia = () => {
  return (
    <div className="wrapper">
      <InstantSearch indexName={"bimify_test"} searchClient={searchClient}>
        <div className="search-and-hits">
          <SearchBox />
          <Hits />
        </div>

        <div className="map"></div>
      </InstantSearch>
    </div>
  );
};

export default Algolia;
