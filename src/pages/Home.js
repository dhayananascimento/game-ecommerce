import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Header from "../components/Header";

import Products from "../services/products.json";
import images from "../utils/Images";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  function dataSort(orderBy) {
    const sorted = [...products].sort((a, b) => {
      if (a[orderBy] > b[orderBy]) return 1;
      else if (a[orderBy] < b[orderBy]) return -1;
      else return 0;
    });

    setProducts(sorted);
  }

  return (
    <div className="home-container">
      <Header />

      <main className="main">
        <h1>Jogos</h1>
        
        <div className="ordination">
          <h2>Ordenar por: </h2>
          <div>
            <button onClick={() => dataSort("price")}>preço</button>
            <button onClick={() => dataSort("score")}>popularidade</button>
            <button onClick={() => dataSort("name")}>nome</button>
          </div>
        </div>

        <div className="products">
          {products.map((item) => {
            return (
              <Card key={item.id} props={item} image={images[item.image]} />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
