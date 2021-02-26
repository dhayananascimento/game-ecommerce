import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  background-color: #5c9ead;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    color: #fff;
    text-transform: uppercase;
  }

  svg {
    width: 30px;
    height: 30px;
    color: #fff;
  }
`;
