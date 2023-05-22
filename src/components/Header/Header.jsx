import React, { useState } from "react";
import DropwnMenu from "./DropDownMenu/DropDownMenu";
import NavMenu from "./NavMenu/NavMenu";
import Logo from "./Logo/Logo";
import SearchPannel from "./SearchPannel/SearchPannel";
import ToggleTheme from "./ToggleTheme/ToggleTheme";


import "./Header.scss";

function Header() {
 
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Logo />
          <div className="header__nav">
            <div className="header__menu">
              <NavMenu />
              <SearchPannel />
            </div>
            <DropwnMenu />
            <ToggleTheme />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
