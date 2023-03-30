import "./Logo.scss";
import logoImg from "./../../../assets/image/header/logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Logo = () => {
  return (
    <Router>
      <Link to="/">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="header__logo-name">name compony</div>
        </div>
      </Link>
    </Router>
  );
};

export default Logo;
