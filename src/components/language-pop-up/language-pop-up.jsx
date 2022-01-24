import React from "react";
import i18next from "i18next";

const LanguagePopUp = ({ showModalPopup }) => {
  return (
    <div className={`${showModalPopup ? "" : "hidden"} popup-language`}>
      <button
        onClick={() => {
          i18next.changeLanguage(`en`);
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          i18next.changeLanguage(`sv`);
        }}
      >
        Sweedish
      </button>
    </div>
  );
};

export default LanguagePopUp;
