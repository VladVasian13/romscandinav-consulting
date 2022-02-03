import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="policies">
        <h2>
          {" "}
          <i class="fas fa-copyright"></i>ROMSCANDINAV CONSULTING
        </h2>
        <Link to="/" className="link-policies">
          Privacy Notice
        </Link>
        <Link to="/" className="link-policies">
          Terms of Use
        </Link>
        <Link to="/" className="link-policies">
          Cookie Policy
        </Link>
        <h5> Made by Vasian Vlad</h5>
      </div>
      <div className="informations">
        <div className="get-in-touch">
          <h3 className="footer-title">Get in touch</h3>
          <h4> address@address.com</h4>
          <h4> second.address@address.com</h4>
        </div>
        <div className="address">
          <h3 className="footer-title">Our bussiness adress</h3>
          <h4> Sweden</h4>
          <h4> Something Str. 22</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
