import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Home } from "./components/layouts/Home";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const hist = createBrowserHistory();


ReactDOM.render(
  <div>
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
