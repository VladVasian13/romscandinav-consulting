import React from "react";
import i18next from "i18next";

import english from "../../assets/images/gb.svg";
import sweedish from "../../assets/images/sv.svg";

import { useTranslation } from "react-i18next";

const LanguagePopUp = ({ showModalPopup }) => {
  const { t } = useTranslation();

  return (
    <div className={`${showModalPopup ? "" : "hidden"} popup-language`}>
      <button
        onClick={() => {
          i18next.changeLanguage(`en`);
        }}
      >
        {t("english")} <img src={english} alt="" className="svgImg" />
      </button>
      <button
        onClick={() => {
          i18next.changeLanguage(`sv`);
        }}
      >
        {t("sweedish")} <img src={sweedish} alt="" className="svgImg" />
      </button>
    </div>
  );
};

export default LanguagePopUp;
