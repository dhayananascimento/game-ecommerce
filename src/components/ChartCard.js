import React from "react";

import "./ChartCard.css";

function ChartCard({ item, index, image, addItem, removeItem }) {
  return (
    <div key={item.id} className="item">
      <img src={image} alt={item.name} />

      <div className="info-item">
        <div className="info">
          <p>{item.name}</p>
          <p>
            {item.price?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div className="quantity">
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
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
