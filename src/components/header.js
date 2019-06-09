import { Link } from "gatsby";
import React, { Component } from "react";
import logo from '../images/logo.svg';

const links = [
  { name: 'home', path: '/'},
  { name: 'about', path: '/about'},
  { name: 'projects', path: '/projects'}
];

class Header extends Component {
  addSelectedClass(linkName){
    return this.props.activeLink === linkName ? 'selected' : '';
  }

  renderLinks() {
    return links.map(({ name, path }) => (
      <li className={`header__nav-list--item ${this.addSelectedClass(name)}`} key={name}>
        <Link to={path}>
          {name}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <Link to="/">
            <img src={logo} className="header__nav-logo" alt="Logo" />
          </Link>
          <ul className="header__nav-list">
            {this.renderLinks()}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header
