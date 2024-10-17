import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Bell Logo" />
        </Link>
      </div>
      <div>
        <Link to="/tools">Start conversation</Link>
      </div>
    </header>
  );
};
