import React from "react";
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import PageAbout from "./components/pages/PageAbout/PageAbout";
import PageKittens from "./components/pages/PageKittens/PageKittens";

function App() {
  return(
    <Router>
      <div>

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

        <Switch>
          <Route path="/about">
            <PageAbout />
          </Route>

          <Route path="/kittens">
            <PageKittens />
          </Route>

          <Route path="/">
            <PageKittens />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}



export default App;
