import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import logo from "../../assets/images/logo.png";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showTopNavbar, setTopNavbar] = useState(false);

  const [navbarScroll, setNavbarScroll] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTopNavbarClose = () => setTopNavbar(false);
  const handleTopNavbarShow = () => setTopNavbar(true);

  const handleNavbarScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          navbarScroll
            ? "navbar-component navbar-component-scroll"
            : "navbar-component"
        }
      >
        <div className="main-container">
          <div className="profile" onClick={handleShow}>
            <FaRegUser />
          </div>

          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          <div className="search" onClick={handleTopNavbarShow}>
            <FaSearch />
          </div>
        </div>
      </div>

      <Sidebar show={show} handleClose={handleClose} />
      <TopNavbar show={showTopNavbar} handleClose={handleTopNavbarClose} />
    </>
  );
};

export default Navbar;
