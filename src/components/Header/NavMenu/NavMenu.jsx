import { useTranslation } from "react-i18next";
import "./NavMenu.scss";
import AddLink from "../../../helpers/functions/AddLinks";

const NavMenu = () => {
  const { t, i18n } = useTranslation();

  const menuItems = [
    [t("navMenu.main"), "/"],
    [t("navMenu.map"), "/map"],
    [t("navMenu.contact"), "/contact"],
    [t("navMenu.about"), "/about"],
    [t("navMenu.partners"), "/partners"],
  ];

  return (
    <nav className="header__menu-nav">
      <AddLink value={menuItems} />
    </nav>
  );
};

export default NavMenu;
