import React from "react";

import "./contactus.css";

const Contact = () => {
  return (
    <div className="grid">
      <div className="text-image">t</div>
      <div className="callus">
        <div className="callus-box">
          <i class="fas fa-phone phone-icon"></i>
          <h1>Call us directy at :</h1>
          <h2>
            SWE: <span className="phone-numbers">+333 2 222 4433</span>
          </h2>
          <h2>
            RO: <span className="phone-numbers">+40 753 222 433</span>
          </h2>
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
                <i class="fab fa-facebook-square fb"></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter-square tw"></i>
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin ld"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-box">Contact Form</div>
      </div>
    </div>
  );
};

export default Contact;
