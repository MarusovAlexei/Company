import "./Social.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import AddIcon from "../../../helpers/functions/AddIcon";

const Social = () => {
  const iconItems = [
    <FontAwesomeIcon icon={faTelegram} />,
    <FontAwesomeIcon icon={faFacebook} />,
    <FontAwesomeIcon icon={faWhatsapp} />,
    <FontAwesomeIcon icon={faInstagram} />,
  ];

  return (
    <div className="footer__blocks-social">
      <div className="social__media">
        <AddIcon iconItems={iconItems} />
      </div>
      <div className="social__button">
        <Link to="tel:+375333939186">Call us</Link>
      </div>
    </div>
  );
};

export default Social;
