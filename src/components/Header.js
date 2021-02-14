import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Chart } from "../assets/cart-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="logo">Games</span>
      <Link to="/checkout">
        <Chart className="chart" />
      </Link>
    </header>
  );
}

export default Header;
