import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSelect from "../language-select/language-select";
import "./navbar.css";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <div>
        <h1 className="logo"> ROMSCANDINAV CONS.</h1>
      </div>
      <div className="navbar-items">
        <ul className="navbar-list">
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
        <LanguageSelect />
      </div>
    </nav>
  );
};

export default NavBar;
