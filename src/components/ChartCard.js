import React from "react";

import "./ChartCard.css";

function ChartCard({ item, index, image, addItem, removeItem }) {
  return (
    <div key={item.id} className="item">
      <img src={image} alt={item.name} />

      <div className="info-item">
        <div>
          <p>{item.name}</p>
          <p>R${item.price}</p>
          <p>quantidade: {item.quantity}</p>
        </div>

        <div>
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
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
