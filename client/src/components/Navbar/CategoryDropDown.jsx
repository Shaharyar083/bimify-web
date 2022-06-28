import React, { useState, useEffect, useRef } from "react";

// packages
import { useDispatch } from "react-redux";
import { setSearch, setCategory } from "../../redux/reducers/product-reducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// conponents
import MenuLink from "./MenuLink";

// constants
import { CATEGORY } from "../../constants/category";

// images
import downIcon from "../../assets/images/navbar/down-icon.png";
import { FaSearch } from "react-icons/fa";

const CategoryDropDown = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const dropDownRef = useRef(null);

  const [dropDown, setDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [input, setInput] = useState("");

  const handleCategory = (name) => {
    dispatch(setCategory(name));
    if (location.pathname != "/product") {
      navigate("/product");
    }

    dispatch(setSearch(input));
    navigate("/product");
  };

  const handleAlgoliaSearch = () => {
    if (selectedCategory) handleCategory(selectedCategory);
    dispatch(setSearch(input));
    navigate("/product");
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
    <>
      <div
        className="categories"
        ref={dropDownRef}
        onClick={() => setDropDown(!dropDown)}
      >
        <div className="text">{
          selectedCategory ? selectedCategory : "Categories"
        }</div>
        <img src={downIcon} alt="" className="down-icon" />

        <div className={dropDown ? "drop-down-open" : "drop-down-close"}>
          {[...CATEGORY].sort(sortCategory).map((data, idx) => (
            <MenuLink
              icon={data.icon}
              label={data.label}
              key={idx}
              // onClick={() => handleCategory(data.label)}
              onClick={() => setSelectedCategory(data.label)}
              active={selectedCategory}
            />
          ))}
        </div>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder={t("search-input.1")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="icon" onClick={handleAlgoliaSearch}>
          <FaSearch />
        </div>
      </div>
    </>
  );
};

export default CategoryDropDown;
