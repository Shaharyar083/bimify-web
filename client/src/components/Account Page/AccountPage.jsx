import React, { useState } from "react";
import "./accountPage.scss";
import profile from "../../assets/account/profile.png";
import {
  FaUserAlt,
  FaRegAddressCard,
  FaCloudDownloadAlt,
  FaPen,
  FaSignOutAlt,
} from "react-icons/fa";
import Downloads from "./downloads";
import Accounts from "./accounts";
import Addresses from "./addresses";
import { useTranslation } from "react-i18next";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const tabArray = [
  { name: "Account", icon: <FaUserAlt /> },
  { name: "Addresses", icon: <FaRegAddressCard /> },
  { name: "Downloads", icon: <FaCloudDownloadAlt /> },
  { name: "Comments", icon: <FaPen /> },
  { name: "Sign Out", icon: <FaSignOutAlt /> },
];

function handleLogout(instance) {
  instance.logoutRedirect().catch((e) => {
    console.error(e);
  });
}

const AccountPage = () => {
  const { instance, accounts } = useMsal();
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [active, setActive] = useState();

  const handleActive = (string) => {
    setActive(string);

    if (string === "Sign Out") {
      handleLogout(instance);
      navigate("/");
    }

    if (string === "Account")
      window.location.href =
        "https://bimform123.b2clogin.com/bimform123.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_portaledit1&client_id=cfe6e535-2e20-49b8-b772-b9ae73c86c18&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login";
  };

  return (
    <div className="account-page">
      <div className="profile-section">
        <div className="profile-image">
          <img src={profile} alt="" />
        </div>

        <div className="p-detail">
          <div className="id">{accounts[0]?.localAccountId}</div>

          <div className="text-wrap">
            <span className="title">{t("Account.32")}:</span>
            <span className="sub">{accounts[0]?.name}</span>
          </div>

          <div className="text-wrap">
            <span className="title">{t("Account.33")}:</span>
            <span className="sub">{accounts[0]?.username}</span>
          </div>

          <div className="text-wrap">
            <span className="title">{t("Account.34")}:</span>
            <span className="sub">
              {accounts[0]?.idTokenClaims?.extension_Company}
            </span>
          </div>

          <div className="text-wrap">
            <span className="title">{t("Account.35")}:</span>
            <span className="sub">
              {accounts[0]?.idTokenClaims?.extension_Occupation}
            </span>
          </div>
        </div>
      </div>

      <div className="tab-section">
        {tabArray.map((data, index) => (
          <div
            className={`tab${index}`}
            onClick={() => {
              handleActive(data.name);
            }}
            key={index}
          >
            <div className="icon">{data.icon}</div>
            <div className="text">{t(`Account.${index + 36}`)}</div>
          </div>
        ))}
      </div>

      {active === tabArray[0].name && <Accounts />}
      {active === tabArray[1].name && <Addresses />}
      {active === tabArray[2].name && <Downloads />}

      {active === undefined && (
        <div className="para-wrapper">
          <div className="p">
            {t("Account.41")} <span className="bold">373zVsl13e</span> (
            {t("Account.42")} <span className="bold">373zVsl13e</span>?{" "}
            <span className="link">{t("Account.43")}</span>)
          </div>

          <div className="p">
            {t("Account.44")} <span className="link">{t("Account.45")}</span>,{" "}
            {t("Account.46")} <span className="link">{t("Account.47")}</span>,{" "}
            {t("Account.48")} <span className="link">{t("Account.49")}</span>.
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
