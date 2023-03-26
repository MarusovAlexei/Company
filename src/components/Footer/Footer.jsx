import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__blocks">
          <div className="footer__blocks-addresses">
            <h3>Office addresses:</h3>
            <ul className="footer__list">
              <li>Minsk</li>
              <li>Mogilev</li>
              <li>Moscow</li>
              <li>Urmundia</li>
              <li>Gondor</li>
            </ul>
          </div>
          <div className="footer__blocks-contacts">
            <h3>Contact numbers:</h3>
            <ul className="footer__list">
              <li>+376(22)2222222</li>
              <li>+376(22)2222222</li>
              <li>+376(22)2222222</li>
            </ul>
          </div>
          <div className="footer__blocks-social">
            <div className="social__media">
              <a className="social__media-item" href="#">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a className="social__media-item" href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="social__media-item" href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a className="social__media-item" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="social__button">
              <button>Call us</button>
            </div>
          </div>
        </div>
        <div className="footer__name-company">© name company2023</div>
      </div>
    </>
  );
}

export default Footer;
