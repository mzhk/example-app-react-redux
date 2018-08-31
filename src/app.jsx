import React from 'react';
import './app.scss';
import NavBar from './core/components/nav-bar/nav-bar';
import { Route, Switch } from "react-router-dom";
import HomePage from "./core/components/home-page";
import MovieExplorer from "./movie/containers/movie-explorer";
import MovieExplorerWithStore from "./movie/containers/movie-explorer-with-store";
import About from "./core/components/about";


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie" component={MovieExplorer} />
      <Route path="/moviestore" component={MovieExplorerWithStore} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
