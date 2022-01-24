import React from "react";

import "./language-select.css";

import LanguagePopUp from "../language-pop-up/language-pop-up";
import { t } from "i18next";

class LanguageSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      showModalPopup: false,
    };
  }
  isShowPopup = (open) => {
    if (open) {
      this.setState({ showModalPopup: false });
    } else {
      this.setState({ showModalPopup: true });
    }
  };

  render() {
    return (
      <div
        className="languages"
        onClick={() => this.isShowPopup(this.state.showModalPopup)}
      >
        <h2>{t("language")}</h2>
        <i className="fas fa-globe-europe language"></i>
        <i className="fas fa-arrow-down language-arrow"></i>
        <LanguagePopUp showModalPopup={this.state.showModalPopup} />
      </div>
    );
  }
}

export default LanguageSelect;
