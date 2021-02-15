import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Product from "./pages/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/chart" component={Chart} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
