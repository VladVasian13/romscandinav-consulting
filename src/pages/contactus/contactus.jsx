import React, { useState } from "react";
import InputForm from "../../components/forms/input-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./contactus.css";

const Contact = () => {
  const [isDisabled, disable] = useState(false);
  const sendDataToParent = (index) => {
    disable(index);
  };
  return (
    <div className="grid">
      <div className="flex-column">
        <div className="callus">
          <div className="callus-box">
            <div>
              <h1>Call us directy at :</h1>
              <h2>
                <i className="fas fa-phone phone-icon"></i>SWE:{" "}
                <span className="phone-numbers">
                  <a href="tel:+40 753 222 433">+333 2 222 4433</a>
                </span>
              </h2>
              <h2>
                <i className="fas fa-phone phone-icon"></i>ROU:{" "}
                <span className="phone-numbers">
                  <a href="tel:+40 753 222 433">+40 753 222 433 </a>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-box">
            <h1>Contact us on social media</h1>
            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square fb"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter-square tw"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin ld"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="contact-form">
          <div className="contact-form-box">
            <h1 className="title">Contact Us</h1>
            <h3 className="description">
              {" "}
              To schedule time to speak with one of our sales
              representatives,complete the form and then click submit.
            </h3>
            <form className="formular" name="contact" method="post" data-netlify="true" onSubmit="submit">
              <div className="inputs">
                <div className="form-col1">
                  <div>
                    <InputForm
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      clasa="input-contact"
                      sendDataToParent={sendDataToParent}
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Email"
                      placeholder="Email"
                      type="email"
                      clasa="input-contact"
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Company Name"
                      placeholder="Company Name"
                      type="text"
                      clasa="input-contact"
                    />
                  </div>
                </div>
                <div className="form-col2">
                  <div>
                    <InputForm
                      label="Last Name"
                      placeholder="Last Name"
                      type="text"
                      clasa="input-contact"
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Phone Number"
                      placeholder="Phone Number"
                      type="number"
                      clasa="input-contact"
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Email"
                      placeholder="Website"
                      type="text"
                      clasa="input-contact"
                    />
                  </div>
                </div>
              </div>
              <div className="input-div">
                <TextField
                  label="Comment"
                  variant="outlined"
                  required
                  multiline
                  rows={6}
                />
              </div>
              <div className="div-button">
                <Button
                  variant="outlined"
                  className="form-button"
                  disabled={isDisabled}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
