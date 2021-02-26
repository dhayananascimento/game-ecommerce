import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const Main = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 40px 10px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`;

export const Ordination = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  h2 {
    margin-right: 10px;
    font-size: 24px;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 10px;
    margin: 5px 10px;
    transition: 0.2s;
    outline: none;
    border-radius: 5px;
    background-color: #ededed;
  }

  button:hover {
    background-color: #5c9ead;
    color: #fff;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: space-evenly;
`;
