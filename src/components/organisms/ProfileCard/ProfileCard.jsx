import React from 'react';

function ProfileCard({ animal }) {
  const makeSound = (e) => {
    e.preventDefault();
    window.alert('meow , meow!')
  }

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 py-2"
      key={animal.title}
    >
      <div className="card">
        <img
          className="card-img-top"
          src={animal.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{animal.title}</h5>
          <p className="card-text">{animal.description}</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={makeSound}
          >
            meow
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
