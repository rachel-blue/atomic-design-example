import React from "react";
import { kittens } from './kittens.js';
import './App.css';

function App() {
  console.log(kittens)

  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <h1>Navbar</h1>
      </div>

      <div className="container py-4">
        <h1>Content!</h1>
        <p>There will be content and things here. For now, just some simple text</p>

        <div className="row">

          {
            kittens.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 py-2"
                key={item.title}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">Go Somewhere</a>
                  </div>
                </div>
              </div>
            ))
          }

        </div>



      </div>

      <div className="card-footer">
        <small>Footer placeholder</small>
      </div>
    </div>
  );
}

export default App;
