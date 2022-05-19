import React, { useState } from "react";
import InputWrap from "./inputwrap";
import { useTranslation } from "react-i18next";

const Accounts = () => {
  const { t, i18n } = useTranslation();
  const [inputFields, setInputFields] = useState({
    fname: "",
    lname: "",
    dname: "",
    email: "",
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const {
    fname,
    lname,
    dname,
    email,
    currentpassword,
    newpassword,
    confirmpassword,
  } = inputFields;

  const [passwordEye, setPassEye] = useState({
    curpassword: true,
    npassword: true,
    cfmpassword: true,
  });

  const { curpassword, npassword, cfmpassword } = passwordEye;

  const handleInput = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handlePassword = (key, value) => {
    setPassEye({ ...passwordEye, [key]: !value });
  };

  return (
    <div className="accounts-section form-fields">
      <div className="name-wrap">
        <InputWrap
          label={t("Account.22")}
          required={true}
          id="fname"
          name="fname"
          type="text"
          value={fname}
          onChange={handleInput}
        />

        <InputWrap
          label={t("Account.23")}
          required={true}
          id="lname"
          name="lname"
          type="text"
          value={lname}
          onChange={handleInput}
        />
      </div>
      <InputWrap
        label={t("Account.24")}
        required={true}
        id="dname"
        name="dname"
        type="text"
        message={t("Account.25")}
        value={dname}
        onChange={handleInput}
      />
      <InputWrap
        label={t("Account.26")}
        required={true}
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleInput}
      />
      <div className="password">{t("Account.27")}</div>
      <InputWrap
        label={t("Account.28")}
        id="currentpassword"
        name="currentpassword"
        type={curpassword ? "password" : "text"}
        eye={curpassword}
        value={currentpassword}
        onChange={handleInput}
        onClick={() => {
          handlePassword("curpassword", curpassword);
        }}
      />
      <InputWrap
        label={t("Account.29")}
        id="newpassword"
        name="newpassword"
        type={npassword ? "password" : "text"}
        eye={npassword}
        value={newpassword}
        onChange={handleInput}
        onClick={() => {
          handlePassword("npassword", npassword);
        }}
      />
      <InputWrap
        label={t("Account.30")}
        id="confirmpassword"
        name="confirmpassword"
        type={cfmpassword ? "password" : "text"}
        eye={cfmpassword}
        value={confirmpassword}
        onChange={handleInput}
        onClick={() => {
          handlePassword("cfmpassword", cfmpassword);
        }}
      />
      <div className="save">{t("Account.31")}</div>
    </div>
  );
};

export default Accounts;
