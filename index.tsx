import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./src/App";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { GlobalStyle } from "./src/App/globalStyle";

ReactDOM.render(
  <Provider store={store()}>
    <App />

    <GlobalStyle />
  </Provider>,
  document.getElementById("app")
);
