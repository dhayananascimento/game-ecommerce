import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled(Link)`
  width: 250px;
  min-height: 350px;
  padding: 10px;
  border-radius: 5px;

  transition: 0.2s;
  text-decoration: none;
  background-color: #fff;
  box-shadow: #ededed 4px 4px 3px;
  border: 1px solid #ededed;

  display: flex;
  align-items: initial;
  justify-content: space-between;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  h2 {
    width: 230px;
    display: block;
    overflow: hidden;
    font-size: 18px;
    margin-top: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  p {
    font-size: 16px;
    text-align: center;
  }

  p span {
    font-size: 20px;
    color: #5c9ead;
  }
`;
