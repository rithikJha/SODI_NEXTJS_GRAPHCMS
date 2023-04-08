import React, { useState, useContext } from "react";
import { nav_logo } from "./image";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" href="/" exact>
          <img
            className="logo-image"
            src={nav_logo}
            alt="Logo"
          />
          <a className="logo-text" href="/">
            State Of Deep Insight
          </a>
        </div>
        <div className={`navbar-links ${showMenu ? "show-menu" : ""}`}>
          <Link href="/" className="navbar-link" onClick={handleMenuLinkClick}>
            Home
          </Link>
          <Link
            href="/articles"
            className="navbar-link"
            onClick={handleMenuLinkClick}
          >
            Articles
          </Link>
          <Link
            href="/aboutus"
            className="navbar-link"
            onClick={handleMenuLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className="navbar-link"
            onClick={handleMenuLinkClick}
          >
            Contact
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={`bar ${showMenu ? "animate" : ""}`} />
          <div className={`bar ${showMenu ? "animate" : ""}`} />
          <div className={`bar ${showMenu ? "animate" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
