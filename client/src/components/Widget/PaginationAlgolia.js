import React from "react";
import { Pagination } from "react-instantsearch-dom";
import Rectangle24 from "../../assets/images/other/Rectangle24.png";
import Vectorarrow from "../../assets/images/other/Vectorarrow.png";
import "./NumSlider.css";

const PaginationAlgolia = () => {
  return (
    <Pagination
      padding={2} 
      showFirst={false}
      showLast={false}
      translations={{
        previous: (
          <div className="arrownextcontainertwo">
            <img src={Vectorarrow} alt="" className="arrownextonetwo" />
            <img src={Rectangle24} alt="" className="arrownexttwotwo" />
          </div>
        ),
        next: (
          <div className="arrownextcontainer">
            <img src={Vectorarrow} alt="" className="arrownextone" />
            <img src={Rectangle24} alt="" className="arrownexttwo" />
          </div>
        ),
      }}
    />
  );
};

export default PaginationAlgolia;
