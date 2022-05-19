import React from "react";
import loaderImg from "../../assets/loader/bimroom-loader.svg";

const index = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "100",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loaderImg} alt="" width={50} height={50} />
    </div>
  );
};

export default index;
