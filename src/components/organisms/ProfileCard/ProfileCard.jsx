import React from 'react';
import CardText from "../../molecules/CardText/CardText";
import Button from "../../atoms/Button/Button";

function ProfileCard({ animal }) {
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
          <CardText animal={animal} />
          <Button
            children="meow"
            sound={animal.sound}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
