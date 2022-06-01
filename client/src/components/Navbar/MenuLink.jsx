import React from "react";

const MenuLink = ({ icon, label, onClick }) => {
  return (
    <div className="menu-link" onClick={onClick}>
      <img src={icon} alt="" />
      <div className="label">{label}</div>
    </div>
  );
};

export default MenuLink;
