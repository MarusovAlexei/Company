import "./DropDownMenu.scss";
import React, { useState } from "react";

const DropwnMenu = () => {
  const [inVisible, isVisible] = useState(false);
  const [language, setLanguage] = useState("english");

  const DropdownContent = (props) => {
    return (
      <div
        className="dropdown-content"
        onClick={() => {
          setLanguage(props.content);
          isVisible(!inVisible);
        }}
      >
        {props.content}
      </div>
    );
  };

  return (
    <>
      <div className="header__language">
        <div className="header__language-text">Language</div>
        <div className="header__language-btn">
          <button
            className="language__btn-dropdown"
            onClick={() => isVisible(!inVisible)}
          >
            {language}
          </button>
          <div
            className={
              inVisible
                ? "isVisible dropdown-content__wrapper"
                : "inVisible dropdown-content__wrapper"
            }
          >
            <DropdownContent content="russian" />
            <DropdownContent content="english" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropwnMenu;
