import React, { useEffect, useState, useContext } from "react";

import { ListContext } from "../store/providers/ListProvider";
import Header from "../components/Header";
import images from "../utils/Images";
import "./Chart.css";
import { Link } from "react-router-dom";
import ChartCard from "../components/ChartCard";

function Chart() {
  const [chart, setChart] = useContext(ListContext);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  function removeItem(indexItem) {
    let quantity = chart[indexItem].quantity;
    let data = [...chart];

    if (quantity > 1) {
      data.map((item, index) => {
        if (index === indexItem) item.quantity = quantity - 1;

        return true;
      });
      setChart(data);
    } else {
      data.splice(indexItem, 1);

      setChart(data);
    }
  }

  function addItem(indexItem) {
    let quantity = chart[indexItem].quantity;
    let data = [...chart];

    data.map((item, index) => {
      if (index === indexItem) item.quantity = quantity + 1;

      return true;
    });
    setChart(data);
  }

  function handleCheckout() {
    let auxShipping = 0;
    let auxSubtotal = 0;

    const MINIMUM_DISCOUNT_AMOUNT = 250;
    const SHIPPING_BY_PRODUCT = 10;

    for (let i = 0; i < chart.length; i++) {
      const element = chart[i];
      auxSubtotal += element.quantity * element.price;
      auxShipping += element.quantity;
    }

    auxShipping = auxShipping * SHIPPING_BY_PRODUCT;
    if (auxSubtotal >= MINIMUM_DISCOUNT_AMOUNT) auxShipping = 0;

    setShipping(auxShipping);
    setSubtotal(auxSubtotal);
  }

  useEffect(() => {
    handleCheckout();
  }, [chart]);

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

      <main className="main">
        <div className="shipping">
          <p><span>Frete grátis</span> para compras a partir de <span>R$ 250,00</span></p>
        </div>

        <div className="mainInfo">
          <div className="products">
            {chart.map((item, index) => {
              return (
                <ChartCard
                  key={item.id}
                  item={item}
                  index={index}
                  image={images[item.image]}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              );
            })}
          </div>

          <div className="checkout">
            <p>
              Frete:&nbsp;
              {shipping?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>
              Subtotal:&nbsp;
              {subtotal?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>
              Total:&nbsp;
              {(shipping + subtotal)?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <Link to="/">Finalizar compra</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chart;
