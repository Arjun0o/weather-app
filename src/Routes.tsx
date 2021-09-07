import React from "react";
import { Cities, Home } from "./containers";
import { Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Cities} />
      <Route path="/cities" component={Home} />
    </Switch>
  );
};
