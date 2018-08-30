import React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById("root"));
