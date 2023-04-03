import { useTranslation } from "react-i18next";
import "./NavMenu.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AddLink from "../../../helpers/functions/Links";

const NavMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <nav className="header__menu-nav">
        <AddLink content={t("navMenu.main")} path="/" />
        <AddLink content={t("navMenu.map")} path="/map" />
        <AddLink content={t("navMenu.contact")} path="/contact" />
        <AddLink content={t("navMenu.about")} path="/about" />
        <AddLink content={t("navMenu.partners")} path="/partners" />
      </nav>
    </>
  );
};

export default NavMenu;
