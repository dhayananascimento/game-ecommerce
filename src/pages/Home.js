import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Header from "../components/Header";

import ProductsData from "../services/products.json";
import images from "../utils/Images";

import { Container, Main, Title, Ordination, Products } from "./HomeStyles";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsData);
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
    <Container>
      <Header />

      <Main>
        <Title>Jogos</Title>

        <Ordination>
          <h2>Ordenar por: </h2>
          <div>
            <button onClick={() => dataSort("price")}>preço</button>
            <button onClick={() => dataSort("score")}>popularidade</button>
            <button onClick={() => dataSort("name")}>nome</button>
          </div>
        </Ordination>

        <Products>
          {products.map((item) => {
            return (
              <Card key={item.id} props={item} image={images[item.image]} />
            );
          })}
        </Products>
      </Main>
    </Container>
  );
}

export default Home;
