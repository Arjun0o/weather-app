import React from "react";
import { Cities, Home } from "./containers";
import { Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/cities" component={Cities} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};
