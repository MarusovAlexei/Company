import { ReactDOM, React } from "react";

import "./Header.scss";
import logoImg from "./../image/header/logo.png";
import blackThemeImg from "./../image/header/blackThemeImg.png";
import whiteThemeImg from "./../image/header/whiteThemeImg.png";

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
            <div className="header__menu-nav">
              <div className="text-menu">Main</div>
              <div className="text-menu">Map</div>
              <div className="text-menu">Contact</div>
              <div className="text-menu">About</div>
              <div className="text-menu">Partners</div>
            </div>
            <div className="header__menu-search">
              <input
                className="menu-search"
                type="text"
                placeholder={"enter the name of the residential complex"}
              />
            </div>
          </div>
          <div className="header__language">
            <div className="header__language-text">Language</div>
            <div className="header__language-btn">
              <button className="language__btn-dropdown">english</button>
              <div className="dropdown-content text-menu">russian</div>
              <div className="dropdown-content text-menu">english</div>
            </div>
          </div>
          <div className="header__theme-btn">
            <img src={blackThemeImg} alt="theme" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
