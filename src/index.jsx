import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
); //add new components and routes into main
