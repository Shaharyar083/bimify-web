import React from "react";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { setToggleImage } from "../../redux/reducers/product-reducer";
import { useTranslation } from "react-i18next";

const ToggleSwitch = () => {
  const { t, i18n } = useTranslation();
  const toggle = useSelector((store) => store.product.toggleImage);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setToggleImage());
  };

  return (
    <Switch
      checked={toggle}
      onChange={handleToggle}
      handleDiameter={50}
      offColor="#313133"
      onColor="#FEB449"
      offHandleColor="#fff"
      onHandleColor="#fff"
      height={35}
      width={110}
      borderRadius={5}
      activeBoxShadow="0px 0px 1px 2px #fff"
      className="handleSwitchToggle"
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 14,
            color: "#fff",
            marginLeft: "-20px",
            fontFamily: "Montserrat",
          }}
        >
          {t("product.2")}
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 14,
            color: "#fff",
            paddingLeft: "20px",
            fontFamily: "Montserrat",
            marginLeft: "10px",
          }}
        >
          {t("product.3")}
        </div>
      }
      // className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default ToggleSwitch;
