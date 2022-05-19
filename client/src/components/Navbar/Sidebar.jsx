import React from "react";
import "./sidebar.scss";
import { Offcanvas } from "react-bootstrap";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = ({ show, handleClose }) => {
  const { t, i18n } = useTranslation();
  const handleclick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const profileID = accounts[0]?.localAccountId.split("-");

  function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  }

  function handleLogout(instance) {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
  }

  return (
    <Offcanvas show={show} onHide={handleClose} className="sidebar-component">
      <div className="wrapper">
        <div className="top">
          <div className="head">
            <div className="cross" onClick={handleClose}>
              <FaTimes />
            </div>

            <div className="profile">
              <FaUserCircle className="p_icon" />
              <span>{profileID ? profileID[0] : ""}</span>
            </div>
          </div>

          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <div className="text">{t("sidebar.1")}</div>
          </Link>

          {isAuthenticated ? (
            <div className="text" onClick={() => handleLogout(instance)}>
              {t("sidebar.2")}
            </div>
          ) : (
            <div className="text" onClick={() => handleLogin(instance)}>
              {t("sidebar.7")}
            </div>
          )}
        </div>

        <div className="btn">
          <button onClick={() => handleclick("french")}>FN</button>
          <button onClick={() => handleclick("en")}>EN</button>
        </div>

        <div className="bottom">
          <div className="text">{t("sidebar.3")}</div>
          <div className="text">{t("sidebar.4")}</div>
          <div className="text">{t("sidebar.5")}</div>
          <div className="text">{t("sidebar.6")}</div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Sidebar;
