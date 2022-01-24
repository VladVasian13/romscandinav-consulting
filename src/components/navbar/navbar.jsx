import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../language-select/language-select";
import "./navbar.css";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <div>
        <h1 className="logo"> ROMSCANDINAV CONSULTING</h1>
      </div>
      <div className="navbar-items">
        <ul className="navbar-list">
          <li> {t("home")} </li>
          <li> {t("aboutUs")} </li>
          <li> {t("contact")} </li>
        </ul>
      </div>
      <LanguageSelect />
    </nav>
  );
};

export default NavBar;
