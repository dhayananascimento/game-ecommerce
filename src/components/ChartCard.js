import React from "react";
import { ItemWrapper, InfoWrapper, Info, Quantity } from "./ChartCardStyles";

function ChartCard({ item, index, image, addItem, removeItem }) {
  return (
    <ItemWrapper>
      <img src={image} alt={item.name} />

      <InfoWrapper>
        <Info>
          <p>{item.name}</p>
          <p>
            {item.price?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Info>

        <Quantity>
          <button
            onClick={() => {
              removeItem(index);
            }}
          >
            -
          </button>
          <input type="text" value={item?.quantity} disabled />
          <button
            onClick={() => {
              addItem(index);
            }}
          >
            +
          </button>
        </Quantity>
      </InfoWrapper>
    </ItemWrapper>
  );
}

export default ChartCard;
