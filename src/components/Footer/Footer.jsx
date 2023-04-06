import React from "react";
import "./Footer.scss";

import Addresses from "./Addresses/Addresses";
import Numbers from "./Numbers/Numbers";
import Social from "./Social/Social";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__blocks">
            <Addresses />
            <Numbers />
            <Social />
          </div>
          <div className="footer__name-company">
            © name company <br /> 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
