import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to="/"
      >
        Navbar
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
