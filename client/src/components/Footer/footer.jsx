import React from "react";
import "./footer.scss";
import { useTranslation } from "react-i18next";

// images & icons
import logo from "../../assets/images/navbar/logo.png";
import sendIcon from "../../assets/images/footer/send-icon.png";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer-component">
      <div className="main-wrapper">
        <div className="left">
          <img src={logo} alt="" />

          <div className="para">
            bimroom is a premium BIM object library to supply your project with
            the best digital products available. Our content is exclusively
            composed of fully parametric, carefully curated BIM objects which
            make it easy to bring your vision to life. Bimroom objects meet
            strict quality criteria and possess the features to ensure smooth
            modeling across the entire lifecycle of your project.
          </div>
        </div>

        <div className="center">
          <div className="menu">
            <div className="link">Home</div>
            <div className="link">Bimroom Plugin </div>
            <div className="link">Contact</div>
            <div className="link">About us</div>
          </div>

          <div className="menu">
            <div className="link">About</div>
            <div className="link">Help</div>
            <div className="link">Terms</div>
            <div className="link">Guidlines</div>
          </div>

          <div className="menu">
            <div className="link">Testimonials</div>
            <div className="link">Advertise</div>
            <div className="link">Integrations</div>
            <div className="link">Careers</div>
          </div>
        </div>

        <div className="right">
          <div className="text">
            Stay in touch with us for the latest updates
          </div>

          <div className="email-send">
            <input placeholder="Enter your email address" />
            <div className="send-btn">
              <img src={sendIcon} alt="" />
            </div>
          </div>
          <div className="social-links">
            <FaFacebookSquare className="icon" />
            <AiFillInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
