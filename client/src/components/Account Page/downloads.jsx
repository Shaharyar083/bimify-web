import React from "react";
import { useTranslation } from "react-i18next";

const Downloads = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="download-section">
      <div className="text">{t("Account.1")}</div>

      <div className="browse">{t("Account.2")}</div>
    </div>
  );
};

export default Downloads;
