import React from "react";
import DropwnMenu from "./DropDownMenu/DropDownMenu";
import NavMenu from "./NavMenu/NavMenu";
import Logo from "./Logo/Logo";
import "./Header.scss";

import blackThemeImg from "./../../assets/image/header/blackThemeImg.png";
import whiteThemeImg from "./../../assets/image/header/whiteThemeImg.png";

function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <div className="header__nav">
          <div className="header__menu">
            <NavMenu></NavMenu>
            <div className="header__menu-search">
              <input
                className="menu-search"
                type="text"
                placeholder={"enter the name of the residential complex"}
              />
            </div>
          </div>
          <DropwnMenu></DropwnMenu>
          <div className="header__theme-btn">
            <img src={blackThemeImg} alt="theme" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
