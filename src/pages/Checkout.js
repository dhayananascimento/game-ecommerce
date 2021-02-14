import React, { useEffect, useState, useContext } from "react";

import { ListContext } from "../store/providers/ListProvider";
import Header from "../components/Header";
import images from "../utils/Images";
import "./Checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  const [chart, setChart] = useContext(ListContext);

  if (!chart.length) {
    return (
      <div className="chart-container">
        <Header />
        
        <main className="main">
          <div className="empty-chart">
            <h1>Carrinho não possui itens!</h1>
            <Link to="/">Continuar navegando...</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <Header />
    </div>
  );
}

export default Checkout;
