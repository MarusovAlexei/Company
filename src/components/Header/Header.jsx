import React from "react";
import DropwnMenu from "./DropDownMenu/DropDownMenu";
import NavMenu from "./NavMenu/NavMenu";
import "./Header.scss";
import logoImg from "./../../assets/image/header/logo.png";
import blackThemeImg from "./../../assets/image/header/blackThemeImg.png";
import whiteThemeImg from "./../../assets/image/header/whiteThemeImg.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="header__logo-name">name compony</div>
        </div>
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
