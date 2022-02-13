import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Navigation = ({ styleClass }) => {
  const { t } = useTranslation();
  return (
    <div className={`navbar-items` + styleClass}>
      <ul className={`navbar-list` + styleClass}>
        <li>
          <Link to="/"> {t("home")} </Link>
        </li>
        <li>
          <Link to="/aboutus"> {t("aboutUs")} </Link>
        </li>
        <li>
          <Link to="/contact">{t("contact")} </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
