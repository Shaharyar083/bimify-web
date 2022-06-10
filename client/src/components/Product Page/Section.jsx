import React from "react";
import useCollapse from "react-collapsed";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import '../Widget/NumSlider.css'
const Section = (props) => {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className="collapsible"> 
      <div className="section-header" {...getToggleProps()}>
        <div className="section-title">{props.title}</div>
        <div className="section-icon">
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div {...getCollapseProps()} >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Section;
