import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Chart } from "../assets/cart-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <span className="logo">Games</span>
      </Link>

      <Link to="/chart">
        <Chart className="chart" />
      </Link>
    </header>
  );
}

export default Header;
