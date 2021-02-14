import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
