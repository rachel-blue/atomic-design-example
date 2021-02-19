import React from "react";
import './App.css';


function App() {
  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <h1>Navbar</h1>
      </div>

      <div className="container py-4">
        <h1>Content!</h1>
        <p>There will be content and things here. For now, just some simple text</p>

        <div className="row">

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>



      </div>

      <div className="card-footer">
        <small>Footer placeholder</small>
      </div>
    </div>
  );
}

export default App;
