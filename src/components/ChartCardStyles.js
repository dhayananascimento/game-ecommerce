import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 2px solid #5c9ead;
  margin-bottom: 10px;
  padding: 10px 0;
  min-width: 200px;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  margin: 5px 0;
`;

export const Quantity = styled.div`
  display: flex;
  background-color: #ededed;
  width: 110px;

  input {
    width: 50px;
    border: none;
    background-color: #ededed;
    outline: 0;
    text-align: center;
  }

  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #5c9ead;
    font-weight: bolder;
    font-size: 20px;
    color: #fff;
    outline: 0;
  }
`;
