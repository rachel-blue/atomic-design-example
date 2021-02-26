import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import paw from './paw-print.png';
import './Header.scss';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light o-header">
      <Link
        className="navbar-brand"
        to="/"
      >
        <div>
          <img
            className="o-header_logo pr-3"
            src={paw}
          />
          <span className="text-black font-weight-bold">
            <Title
              size={3}
              children="Website Name"
              className="d-inline pt-3 pb-0 text-black font-weight-bold"
            />
          </span>
        </div>
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item o-header_nav-item">
            <NavLink
              className="nav-link"
              to="/kittens"
              activeClassName="chosen"
            >
              Kittens
            </NavLink>
          </li>
          <li className="nav-item o-header_nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              activeClassName="chosen"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Header
