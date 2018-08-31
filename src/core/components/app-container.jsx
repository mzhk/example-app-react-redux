import { Route, Switch } from "react-router-dom";
import React from "react";
import HomePage from "./home-page";
import About from "./about";
import MovieExplorer from "../../movie/containers/movie-explorer";
import MovieExplorerWithStore from "../../movie/containers/movie-explorer-with-store";

const AppContainer = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/movie" component={MovieExplorer} />
    <Route path="/moviestore" component={MovieExplorerWithStore} />
    <Route path="/about" component={About} />
  </Switch>
);
export default AppContainer;