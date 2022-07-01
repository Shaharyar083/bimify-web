import React, { useState } from "react";
import "./navbar.scss";

// packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

// components
import CategoryDropDown from "./CategoryDropDown";
import ProjectDropDown from "./ProjectDropDown";
import ProfileDropDown from "./ProfileDropDown";


// images & icons
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/navbar/logo.png";
import AccountModal from "../Modal/Account";
import bimroomlogoorange from '../../assets/images/home/bimroomlogoorange.svg'

function handleLogin(instance) {
  instance.loginPopup(loginRequest).catch((e) => {
    console.error(e);
  });
}

function handleLogout(instance) {
  instance.logoutPopup().catch((e) => {
    console.error(e);
  });
}

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const [openAccountModal, setAccountModal] = useState(false);

  const handleAccountModal = () => setAccountModal(!openAccountModal);

  // console.log("aaaa", accounts);
  return (
    <>
      <div className="navbar-component">
        <div className="main-container">
          <Link to="/" className="logo">
            <img src={bimroomlogoorange} alt="" />
          </Link>

          <div className="center">
            <CategoryDropDown />
          </div>

          <div className="right">
            <ProjectDropDown />

            {isAuthenticated ? (
              <ProfileDropDown
                logout={() => handleLogout(instance)}
                openAccountModal={handleAccountModal}
              />
            ) : (
              <div className="login" onClick={() => handleLogin(instance)}>
                Login
              </div>
            )}
          </div>
        </div>
      </div>

      {accounts[0] && (
        <AccountModal
          showModal={openAccountModal}
          closeModal={handleAccountModal}
          account={accounts[0]}
        />
      )}
    </>
  );
};

export default Navbar;
