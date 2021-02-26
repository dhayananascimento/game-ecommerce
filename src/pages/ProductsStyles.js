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

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      align-items: center;
    }
  }
`;

export const ImageWrapper = styled.div`
  align-items: center;

  img {
    width: 300px;
    height: auto;
  }

  a {
    font-size: 18px;
    transition: 0.2s;
    margin-top: 50px;

    padding: 10px;
    border-radius: 5px;
    background-color: #ededed;
  }

  a:hover {
    background-color: #5c9ead;
    color: #fff;
  }

  @media (max-width: 768px) {
    a {
      margin-top: 10px;
    }
  }
`;

export const InfoWrapper = styled.div`
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  p span {
    font-size: 25px;
    color: #5c9ead;
  }

  > a {
    margin-top: 30px;
    border: 3px solid #5c9ead;
    border-radius: 5px;
    padding: 10px 20px;
    width: 200px;
    transition: 0.2s;
  }

  > a:hover {
    background-color: #5c9ead;
    color: #fff;
  }

  @media (max-width: 768px) {
    margin-top: 30px;

    h1 {
      text-align: center;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  background-color: #ededed;
  width: 200px;
  margin-top: 30px;

  input {
    width: 130px;
    border: none;
    background-color: #ededed;
    outline: 0;
    text-align: center;
  }

  button {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border: none;
    background-color: #5c9ead;
    font-weight: bolder;
    font-size: 20px;
    color: #fff;
    outline: 0;
  }
`;
