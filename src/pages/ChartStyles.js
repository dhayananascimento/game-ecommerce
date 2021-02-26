import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: 1400px;
  padding: 40px 10px;

  display: flex;
  flex-direction: column;
`;

export const EmptyChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  h1 {
    text-align: center;
    font-size: 32px;
  }

  a {
    font-size: 18px;
    transition: 0.2s;

    padding: 10px;
    margin: 5px 10px;
    border-radius: 5px;
    background-color: #ededed;
  }

  a:hover {
    background-color: #5c9ead;
    color: #fff;
  }
`;

export const Shipping = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 20px;

  p {
    font-size: 24px;
    font-weight: normal;
    text-align: center;
  }

  p span {
    font-weight: bold;
    color: #5c9ead;
  }

  p span:nth-child(2) {
    font-size: 28px;
  }
`;

export const MainInfo = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Products = styled.div`
  flex: 1;
`;

export const Checkout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p:nth-child(3) {
    font-size: 24px;
    font-weight: bold;
  }

  a {
    color: #5c9ead;
    font-size: 18px;
    transition: 0.2s;
    border: 2px solid #5c9ead;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
  }

  a:hover {
    color: #fff;
    background-color: #5c9ead;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;
