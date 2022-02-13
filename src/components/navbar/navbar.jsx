import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import LanguageSelect from "../language-select/language-select";
import "./navbar.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Navigation from "../navigation/navigation";

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
  const handleClickAway = () => {
    openIt("hidden");
    changeIt("");
  };

  return (
    <nav className="navbar">
      <div>
        <h1 className="logo"> ROMSCANDINAV CONS.</h1>
      </div>

      <div className="fixedMenu">
        <Navigation styleClass="" />
        <LanguageSelect />
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="drawer">
          <div className={`navbar-burger ` + changeColor} onClick={openNav}>
            <i className="fas fa-bars"></i>
          </div>
          <div className={`navbar-container ` + isOpened}>
            <Navigation styleClass="-burger" />
            <LanguageSelect />
          </div>
        </div>
      </ClickAwayListener>
    </nav>
  );
};

export default NavBar;
