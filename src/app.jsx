import React from 'react';
import './app.scss';
import NavBar from './core/components/nav-bar/nav-bar';
import { Route, Switch } from "react-router-dom";
import MovieExplorer from "./movie/containers/movie-explorer";
import MovieExplorerWithStore from "./movie/containers/movie-explorer-with-store";
import About from "./core/components/about";
import GraphicsOverview from "./graphics/container/graphics-overview";


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={GraphicsOverview} />
      <Route path="/movie" component={MovieExplorer} />
      <Route path="/moviestore" component={MovieExplorerWithStore} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
