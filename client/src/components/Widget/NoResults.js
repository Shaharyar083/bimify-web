import React from "react";
import { connectStateResults, ClearRefinements } from "react-instantsearch-dom";
import { useTranslation } from "react-i18next";

const NoResults = ({ searchResults }) => {
  const { t, i18n } = useTranslation();
  if (!searchResults || searchResults.nbHits > 0) {
    return null;
  }

  const hasRefinements = searchResults.getRefinements().length > 0;
  const description = hasRefinements
    ? "Try to reset your applied filters."
    : "Please try another query.";

  return (
    <div className="hits-empty-state" style={{ color: "#7A7A7A" }}>
      {t("widget.1")}
    </div>
  );
};

export default connectStateResults(NoResults);
