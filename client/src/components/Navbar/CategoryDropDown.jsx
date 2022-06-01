import React, { useState, useEffect, useRef } from "react";

// packages
import { useDispatch } from "react-redux";
import { setSearch, setCategory } from "../../redux/reducers/product-reducer";
import { useNavigate, useLocation } from "react-router-dom";

// conponents
import MenuLink from "./MenuLink";

// constants
import { CATEGORY } from "../../constants/category";

// images
import downIcon from "../../assets/images/navbar/down-icon.png";

const CategoryDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const dropDownRef = useRef(null);

  const [dropDown, setDropDown] = useState(false);

  const handleCategory = (name) => {
    dispatch(setCategory(name));
    if (location.pathname != "/product") {
      navigate("/product");
    }
  };

  const sortCategory = (a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();
    return labelA < labelB ? -1 : labelA > labelB ? 1 : 0;
  };

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
      className="categories"
      ref={dropDownRef}
      onClick={() => setDropDown(!dropDown)}
    >
      <div className="text">Categories</div>
      <img src={downIcon} alt="" className="down-icon" />

      <div className={dropDown ? "drop-down-open" : "drop-down-close"}>
        {[...CATEGORY].sort(sortCategory).map((data, idx) => (
          <MenuLink
            icon={data.icon}
            label={data.label}
            key={idx}
            onClick={() => handleCategory(data.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropDown;
