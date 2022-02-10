import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSelect from "../language-select/language-select";
import "./navbar.css";

const NavBar = () => {
  const { t } = useTranslation();
  const [isOpened, openIt] = useState("hidden");
  const [changeColor, changeIt] = useState("");
  const openNav = () => {
    if (isOpened.length > 0) {
      openIt("");
      changeIt("burger-color");
    } else {
      openIt("hidden");
      changeIt("");
    }
  };

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
      <div className={`navbar-burger ` + changeColor} onClick={openNav}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`navbar-container ` + isOpened}>
        <div className="navbar-items-burger">
          <ul className="navbar-list-burger">
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
      </div>
    </nav>
  );
};

export default NavBar;
