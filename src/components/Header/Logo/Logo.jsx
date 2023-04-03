import "./Logo.scss";
import logoBlackTheme from "./../../../assets/image/header/logoWhite.svg";
import logoWhiteTheme from "./../../../assets/image/header/logoBlack.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const Logo = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <Link to="/">
      <div className="header__logo">
        <div className="header__logo-img">
          <img src={isDark ? logoBlackTheme : logoWhiteTheme} alt="logo" />
        </div>
        <div className="header__logo-name">name compony</div>
      </div>
    </Link>
  );
};

export default Logo;
