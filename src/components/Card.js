import React from "react";
import { CardWrapper, DetailsWrapper } from "./CardStyles";

function Card({ props, image }) {
  return (
    <CardWrapper to={`/product/${props.id}`}>
      <img src={image} alt={props.name} />
      <h2>{props.name}</h2>

      <DetailsWrapper>
        <p>
          R${" "}
          <span>
            {props.price?.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <p>Popularidade: {props.score}</p>
      </DetailsWrapper>
    </CardWrapper>
  );
}

export default Card;
