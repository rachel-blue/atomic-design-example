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
