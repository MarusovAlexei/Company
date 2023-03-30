import { useTranslation } from "react-i18next";
import "./NavMenu.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MenuBtn = (props) => {
  return (
    <Link to={props.path}>
      <div className="text-menu">{props.content}</div>
    </Link>
  );
};

const NavMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div className="header__menu-nav">
        <MenuBtn content={t("navMenu.main")} path="/main" />
        <MenuBtn content={t("navMenu.map")} path="/map" />
        <MenuBtn content={t("navMenu.contact")} path="/contact" />
        <MenuBtn content={t("navMenu.about")} path="/about" />
        <MenuBtn content={t("navMenu.partners")} path="/partners" />
      </div>
    </Router>
  );
};

export default NavMenu;
