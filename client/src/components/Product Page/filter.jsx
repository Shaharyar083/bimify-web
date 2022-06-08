import React from "react";
import ToggleSwitch from "./toggleswitch";
import {
  ClearRefinements,
  RefinementList,
  Panel,
  HierarchicalMenu,
} from "react-instantsearch-dom";
import {
  CustomAlgoliaSearch,
  NumSlider,
  Ratings,
  CustomCurrentRefinements,
} from "../Widget";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const Filter = () => {
  const { t, i18n } = useTranslation();

  const searched = useSelector((store) => store.product.search);
  const selectedCategory = useSelector((store) => store.product.category);

  return (
    <div className="filter-wrapper">
      <div className="product-section">
        <div className="refine-tag-wrapper">
          <CustomCurrentRefinements />
        </div>
      </div>
      <div className="thumbnail-render">
        <div className="thumbnail-text">{t("product.5")}</div>
        <ToggleSwitch />
      </div>
      <div className="text mt-2">{t("product.34")}</div>

      <div className="text mt-3">{t("product.6")}</div>

      <div className="input-search">
        <CustomAlgoliaSearch defaultRefinement={searched} />
      </div>

      <div className="category-search">
        <Section title="Category" defaultExpanded={true}>
          <Panel>
            <HierarchicalMenu
              attributes={[
                "taxonomies_hierarchical.product_cat.lvl0",
                "taxonomies_hierarchical.product_cat.lvl1",
                "taxonomies_hierarchical.product_cat.lvl2",
              ]}
              defaultRefinement={selectedCategory}
            />
          </Panel>
        </Section>
      </div>

      <div className="brand-search">
        <Section title="Brands" defaultExpanded={false}>
          <Panel>
            <RefinementList
              attribute="taxonomies.yith_product_brand"
              limit={2000}
              searchable={true}
              translations={{
                placeholder: "Search for brands…",
                resetTitle: "",
              }}
            />
          </Panel>
        </Section>
      </div>

      <div className="file-type">
        <Section title="Filetype" defaultExpanded={false}>
          <Panel>
            <RefinementList attribute="taxonomies.pa_filetype" limit={2000} />
          </Panel>
        </Section>
      </div>

      <div className="dimensions">
        <Section title="Dimensions" defaultExpanded={false}>
          <Panel className="slim-panel" header="Height" collapsed="true">
            <NumSlider attribute="pa_height_num" />
          </Panel>
          <Panel className="slim-panel" header="Width">
            <NumSlider attribute="pa_width_num" />
          </Panel>
          <Panel className="slim-panel" header="Length">
            <NumSlider attribute="pa_length_num" />
          </Panel>
        </Section>
      </div>

      <div className="rating">
        <Section title="Ratings">
          <Panel>
            <Ratings attribute="average_rating" />
          </Panel>
        </Section>
      </div>
      <div className="rest-filters-button">

      <ClearRefinements
        clearsQuery
        translations={{
          reset: "Reset all filters",
        }}
      />
      </div>
    </div>
  );
};

export default Filter;
