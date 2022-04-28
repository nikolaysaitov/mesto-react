import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-link">
        <img className="header__logo" src={logo} alt="Логотип Место Россия" />
      </div>
    </header>
  );
}

export default Header;
