import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Chart } from "../assets/cart-icon.svg";
import { HeaderWrapper } from "./HeaderStyles";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <span>Games</span>
      </Link>

      <Link to="/chart">
        <Chart />
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
