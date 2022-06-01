import React from "react";
import "./style.scss";

// icons
import downIcon from "../../../assets/images/navbar/down-icon.png";

const LoadMore = ({ text, down, onClick }) => {
  return (
    <div className="load-more-component">
      <div className="line"></div>

      <div className="show-more" onClick={onClick}>
        <div className="text">{text}</div>
        <img src={downIcon} alt="" className={down ? "down-icon" : "up-icon"} />
      </div>

      <div className="line"></div>
    </div>
  );
};

export default LoadMore;
