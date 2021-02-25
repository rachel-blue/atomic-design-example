import React from 'react';
import { Link } from "react-router-dom";

function TemplateDefault({ children }) {
  return (
    <>
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

      <div className="container py-4">
        {children}
      </div>

      <footer
        className="footer py-3 o-footer text-center bg-light"
      >
        <div className="container">
          <a
            className="btn btn-outline-primary"
            href="https://github.com/rachel-blue/atomic-design-example"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            View the Source Code
          </a>
        </div>
      </footer>

    </>
  )
}

export default TemplateDefault;
