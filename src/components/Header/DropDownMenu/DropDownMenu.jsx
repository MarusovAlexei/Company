import "./DropDownMenu.scss";
import React, { useState } from "react";

const DropdownContent = (props) => {
  return <div className="dropdown-content">{props.content}</div>;
};

const DropwnMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="header__language">
        <div className="header__language-text">Language</div>
        <div className="header__language-btn">
          <button
            className="language__btn-dropdown"
            onClick={() => setDropdown(!dropdown)}
          >
            english
          </button>
          <div
            className={
              dropdown
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
