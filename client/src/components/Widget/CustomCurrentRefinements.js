import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CustomCurrentRefinements = connectCurrentRefinements(
  ({ items, refine }) => {
    let list = [];
    items?.map((item) => {
      if (
        item?.attribute === "taxonomies_hierarchical.product_cat.lvl0" ||
        item?.attribute === "taxonomies_hierarchical.product_cat.lvl1" ||
        item?.attribute === "taxonomies_hierarchical.product_cat.lvl2"
      ) {
        list = [
          ...list,
          { label: item?.currentRefinement, cancel: item?.value },
        ];
      }

      if (
        item?.attribute === "taxonomies.yith_product_brand" ||
        item?.attribute === "taxonomies.pa_filetype"
      ) {
        item?.items?.map((data) => {
          list = [...list, { label: data?.label, cancel: data?.value }];
        });
      }

      if (item.attribute === "pa_height_num") {
        list = [
          ...list,
          {
            label: `Height: ${item?.currentRefinement?.min}mm - ${item?.currentRefinement?.max}mm:`,
            cancel: item?.value,
          },
        ];
      }

      if (item.attribute === "pa_width_num") {
        list = [
          ...list,
          {
            label: `Width: ${item?.currentRefinement?.min}mm - ${item?.currentRefinement?.max}mm:`,
            cancel: item?.value,
          },
        ];
      }

      if (item.attribute === "pa_length_num") {
        list = [
          ...list,
          {
            label: `Length: ${item?.currentRefinement?.min}mm - ${item?.currentRefinement?.max}mm:`,
            cancel: item?.value,
          },
        ];
      }
    });

    return (
      <>
        {list?.length > 0 &&
          list?.map((data, idx) => (
            <div className="tags" key={idx}>
              <div className="label">{data?.label}</div>
              <MdOutlineCancel
                className="cancel"
                onClick={() => {
                  refine(data.cancel);
                }}
              />
            </div>
          ))}
      </>
    );
  }
);

export default CustomCurrentRefinements;
