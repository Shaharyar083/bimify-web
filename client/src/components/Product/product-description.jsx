import React, { useEffect, useState, useRef } from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const ProductDescription = ({ description }) => {
  const { t, i18n } = useTranslation();
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 991 && ref?.current) setHeight(ref?.current?.clientHeight);
  }, [ref]);

  return (
    <div className="description">
      <div className="space" />
      <div className="title">{t("catalog.6")}</div>

      <div
        className="para"
        ref={ref}
        style={{
          maxHeight: height > 400 ? "400px" : "auto",
          overflowY: height > 400 ? "scroll" : "unset",
        }}
      >
        {parse(`${description}`)}
      </div>
    </div>
  );
};

export default ProductDescription;
