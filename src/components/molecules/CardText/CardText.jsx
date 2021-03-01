import React from 'react';
import './CardText.css'
import Title from "../../atoms/Title/Title";

function CardText({ animal }) {
  return (
    <div className="m-card-text pb-4">

      <Title
        size={5}
        children={animal.title}
      />

      <p
        className="card-text"
      >
        {animal.description}
      </p>

    </div>
  );
}

export default CardText;
