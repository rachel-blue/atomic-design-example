import React from 'react';
import { Link } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import paw from './paw-print.png';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to="/"
      >
        <div>
          <img
            className="o-header-logo pr-3"
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
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
            >
              Kittens
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Header
