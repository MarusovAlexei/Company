import "./SearchPannel.scss";
import { useTranslation } from "react-i18next";

const SearchPannel = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header__menu-search">
      <input className="menu-search" type="text" placeholder={t("search")} />
    </div>
  );
};

export default SearchPannel;
