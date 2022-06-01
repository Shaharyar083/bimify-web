import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// conponents
import MenuLink from "./MenuLink";

// images
import downIcon from "../../assets/images/navbar/down-icon.png";
import projectIcon from "../../assets/images/navbar/project-icon.png";
import boxIcon from "../../assets/images/navbar/box-icon.png";
import heartIcon from "../../assets/images/navbar/heart-icon.png";

const ProjectDropDown = () => {
  const navigate = useNavigate();
  const dropDownRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  return (
    <div
      className="projects-wrapper"
      ref={dropDownRef}
      onClick={() => setDropDown(!dropDown)}
    >
      <div className="text">Projects</div>
      <img src={downIcon} alt="" className="down-icon" />

      <div className={dropDown ? "drop-down-open" : "drop-down-close"}>
        <MenuLink icon={projectIcon} label="Project #1232" />
        <MenuLink icon={projectIcon} label="Project #4241" />
        <MenuLink icon={projectIcon} label="My Project" />
        <MenuLink icon={projectIcon} label="Company Project" />

        <div
          style={{
            border: "1px solid rgba(49, 49, 51, .12)",
            margin: "5px 0",
          }}
        />

        <MenuLink icon={boxIcon} label="Manage Projects" />
        <MenuLink
          icon={heartIcon}
          label="Favourites"
          onClick={() => navigate("/favorite")}
        />
      </div>
    </div>
  );
};

export default ProjectDropDown;
