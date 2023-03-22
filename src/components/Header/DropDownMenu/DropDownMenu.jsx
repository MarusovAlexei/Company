import "./DropDownMenu.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DropwnMenu = () => {
  const [inVisible, isVisible] = useState(false);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const DropdownContent = (props) => {
    return (
      <div
        className="dropdown-content"
        onClick={() => {
          setLanguage(props.content);
          isVisible(!inVisible);
          changeLanguage(props.content);
        }}
      >
        {props.content}
      </div>
    );
  };

  return (
    <>
      <div className="header__language">
        <div className="header__language-text">{t("Language")}</div>
        <div className="header__language-btn">
          <button
            className="language__btn-dropdown"
            onClick={() => isVisible(!inVisible)}
          >
            {language}
          </button>
          <div
            className={
              inVisible ? "isVisible dropdown-content__wrapper" : "inVisible"
            }
          >
            <DropdownContent content="ru" />
            <DropdownContent content="en" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropwnMenu;
