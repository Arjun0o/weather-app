import React from "react";
import { Cities, Home } from "./containers";
import { Switch, Route } from "react-router-dom";

interface RouteProps {
  openModal: () => void;
}

export const Routes = ({ openModal }: RouteProps) => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home openModal={openModal} />} />
      <Route path="/cities" render={() => <Cities openModal={openModal} />} />
      <Route path="/home" render={() => <Home openModal={openModal} />} />
    </Switch>
  );
};
