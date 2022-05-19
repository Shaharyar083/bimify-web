import React, { useState } from "react";
import InputWrap from "./inputwrap";
import Select from "react-select";
import { FaEdit } from "react-icons/fa";
import { country } from "../../helper/countryArray";
import { useTranslation } from "react-i18next";

const tabArray = ["Billing address", "Shipping address"];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    minHeight: "0px",
  }),
};

const Addresses = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState();
  const [inputFields, setInputFields] = useState({
    fname: "",
    lname: "",
    companyname: "",
    countrySelect: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    canton: "",
    phone: "",
    email: "",
  });

  const {
    fname,
    lname,
    companyname,
    address1,
    address2,
    zip,
    city,
    phone,
    email,
  } = inputFields;

  const handleActive = (string) => {
    setActive(string);
  };

  const handleInput = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  return (
    <div className="addresses-section form-fields">
      {active === undefined && (
        <>
          <div className="p">{t("Account.3")}</div>

          <div className="address-tab">
            {tabArray.map((data, index) => (
              <div className="tab" key={index}>
                <div className="title">
                  {t(`Account.${index + 4}`)}
                  {/* {data} */}
                </div>

                <div className="sub">{t("Account.6")}</div>

                <div
                  className="edit"
                  onClick={() => {
                    handleActive(data);
                  }}
                >
                  <FaEdit />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {active && (
        <>
          <div className="form-title">
            {active === "Billing address" ? t("Account.4") : t("Account.5")}
          </div>

          <div className="name-wrap">
            <InputWrap
              label={t("Account.7")}
              required={true}
              id="fname"
              name="fname"
              type="text"
              value={fname}
              onChange={handleInput}
            />

            <InputWrap
              label={t("Account.8")}
              required={true}
              id="lname"
              name="lname"
              type="text"
              value={lname}
              onChange={handleInput}
            />
          </div>

          <InputWrap
            label={t("Account.9")}
            id="companyname"
            name="companyname"
            type="text"
            value={companyname}
            onChange={handleInput}
          />

          <div className="input-wrap">
            <div className="label">
              {t("Account.10")} <span>{"*"}</span>
            </div>

            <Select
              options={country}
              styles={customStyles}
              placeholder={t("Account.11")}
              className="react-select-container"
              onChange={(e) => {
                setInputFields({ ...inputFields, countrySelect: e.value });
              }}
            />
          </div>

          <InputWrap
            label={t("Account.12")}
            required={true}
            id="address1"
            name="address1"
            type="text"
            placeholder={t("Account.21")}
            value={address1}
            onChange={handleInput}
          />

          <InputWrap
            id="address2"
            name="address2"
            type="text"
            placeholder={t("Account.13")}
            value={address2}
            onChange={handleInput}
          />

          <InputWrap
            label={t("Account.14")}
            required={true}
            id="zip"
            name="zip"
            type="text"
            value={zip}
            onChange={handleInput}
          />

          <InputWrap
            label={t("Account.15")}
            required={true}
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={handleInput}
          />

          {active === "Billing address" && (
            <>
              <div className="input-wrap">
                <div className="label">{t("Account.16")}</div>

                <Select
                  options={country}
                  styles={customStyles}
                  placeholder={t("Account.17")}
                  className="react-select-container"
                  onChange={(e) => {
                    setInputFields({ ...inputFields, canton: e.value });
                  }}
                />
              </div>

              <InputWrap
                label={t("Account.18")}
                required={true}
                id="phone"
                name="phone"
                type="text"
                value={phone}
                onChange={handleInput}
              />
              <InputWrap
                label={t("Account.19")}
                required={true}
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleInput}
              />
            </>
          )}

          <div className="save">{t("Account.20")}</div>
        </>
      )}
    </div>
  );
};

export default Addresses;
