import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header className="header">
      <nav className="header__nav">
        <img src={logo} className="header__nav-logo" alt="Logo" />
        <ul className="header__nav-list">
          <li className="header__nav-list--item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__nav-list--item">
            <Link to="/about">About</Link>
          </li>
          <li className="header__nav-list--item">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
