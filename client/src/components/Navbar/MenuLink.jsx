import React from "react";

const MenuLink = ({ icon, active, label, onClick }) => {
  return (
    <div
      className={active === label ? "menu-link active" : "menu-link"}
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <div className="label">{label}</div>
    </div>
  );
};

export default MenuLink;
