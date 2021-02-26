import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ListContext } from "../store/providers/ListProvider";
import ProductsData from "../services/products.json";
import Header from "../components/Header";
import images from "../utils/Images";
import {
  Container,
  Main,
  InfoWrapper,
  ImageWrapper,
  Quantity,
} from "./ProductsStyles";

function Product() {
  const { id } = useParams();
  const [chart, setChart] = useContext(ListContext);

  const [product, setProduct] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function removeQuantity() {
    let value = quantity;

    if (value > 1) {
      value--;
      setQuantity(value);
    }
  }

  function addQuantity() {
    let value = quantity;

    value++;
    setQuantity(value);
  }

  function addItemToChart() {
    let data = chart;
    let oldQuantity = 0;
    let findItem = data.find((element) => element.id === product.id);

    if (findItem) {
      let findIndex = data.findIndex((element) => element.id === product.id);
      oldQuantity = data[findIndex].quantity;
      data.splice(findIndex, 1);
    }

    setChart([
      ...data,
      {
        ...product,
        quantity: quantity + oldQuantity,
      },
    ]);
  }

  useEffect(() => {
    let data = ProductsData.find((element) => {
      return element.id === parseInt(id);
    });
    setProduct(data);
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <ImageWrapper>
          <img src={images[product.image]} alt={product.name} />
          <Link to="/">Continuar comprando...</Link>
        </ImageWrapper>

        <InfoWrapper>
          <h1>{product.name}</h1>
          <p>Popularidade: {product.score}</p>
          <p>
            R${" "}
            <span>
              {product.price?.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>

          <Quantity>
            <button onClick={removeQuantity}>-</button>
            <input type="text" value={quantity} disabled />
            <button onClick={addQuantity}>+</button>
          </Quantity>

          <Link to="/chart" className="chart" onClick={addItemToChart}>
            Adicionar ao carrinho
          </Link>
        </InfoWrapper>
      </Main>
    </Container>
  );
}

export default Product;
