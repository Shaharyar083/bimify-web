import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/reducers/product-reducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Library = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    dispatch(setSearch(input));
    navigate("/product");
  };

  return (
    <>
      <div className="main-title">{t("search.1")}</div>
      <div className="search-filter">
        <input
          type="text"
          placeholder={t("search-input.1")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="icon" onClick={handleSearch}>
          <FaSearch />
        </div>
      </div>

      <Link to="/product" style={{ textDecoration: "none" }}>
        <div className="btn-show">{t("search-button.1")}</div>
      </Link>

      <div className="line"></div>
    </>
  );
};

export default Library;
