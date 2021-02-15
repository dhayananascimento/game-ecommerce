import React from "react";

import "./ChartCard.css";

function ChartCard({ item, index, image, addItem, removeItem }) {
  return (
    <div key={item.id} className="item">
      <img src={image} alt={item.name} />

      <div className="info-item">
        <div className="info">
          <p>{item.name}</p>
          <p>R${item.price}</p>
          <p>quantidade: {item.quantity}</p>
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              addItem(index);
            }}
          >
            Aumentar item
          </button>

          <button
            onClick={() => {
              removeItem(index);
            }}
          >
            Excluir item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
