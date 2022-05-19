import React from "react";
import logo from "../../assets/images/logo.png";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer-component">
      <div className="row menu-wrapper">
        <div className="col-lg-4 col-md-12 company-description">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="para">{t("footer.1")}</div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-6 menu">
          <div className="title">BIMROOM</div>
          <div className="subtitle">{t("footer.2")}</div>
          <div className="subtitle">{t("footer.3")}</div>
          <div className="subtitle">{t("footer.4")}</div>
          <div className="subtitle">{t("footer.5")}</div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 menu">
          <div className="title">{t("footer.6")}</div>
          <div className="subtitle"> {t("footer.7")}</div>
          <div className="subtitle">{t("footer.8")}</div>
          <div className="subtitle">{t("footer.9")}</div>
          <div className="subtitle">{t("footer.10")}</div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-6 menu">
          <div className="title">BIMROOM</div>
          <div className="subtitle"> BIM</div>
          <div className="subtitle">{t("footer.13")}</div>
          <div className="subtitle">{t("footer.14")}</div>
          <div className="subtitle">{t("footer.15")}</div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-6 menu">
          <div className="title">{t("footer.16")}</div>
          <div className="subtitle">{t("footer.17")}</div>
          <div className="subtitle">{t("footer.18")}</div>
          <div className="subtitle">{t("footer.19")}</div>
          <div className="subtitle">{t("footer.20")}</div>
        </div>
      </div>

      <div className="line"></div>

      <div className="copyright">
        <div className="left ">{t("footer.21")}</div>

        <div className="right">
          <FaTwitter className="icon" />
          <FaFacebook className="icon" />
          <FaYoutube className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
