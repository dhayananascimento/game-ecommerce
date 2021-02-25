import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function Card({ props, image }) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="card">
        <img src={image} alt={props.name} />
        <h2>{props.name}</h2>

        <div className="details">
          <p>
            R$ <span>{props.price?.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
          </p>
          <p>Popularidade: {props.score}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
