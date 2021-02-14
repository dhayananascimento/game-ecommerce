import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
