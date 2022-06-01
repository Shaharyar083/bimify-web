import React from "react";
import "./style.scss";

// package's
import { useNavigate } from "react-router-dom";

// image's
import backIcon from "../../assets/images/icons/back-icon.png";

const MoveBack = () => {
  const navigate = useNavigate();
  return (
    <div className="move-back-component">
      <div className="back" onClick={() => navigate(-1)}>
        <img src={backIcon} alt="" />
        <div className="text">Back</div>
      </div>

      <div className="line" />
    </div>
  );
};

export default MoveBack;
