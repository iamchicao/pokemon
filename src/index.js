import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./Components/Containers/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { searchPokemon } from "./Components/Reducers/reducers";

const store = createStore(searchPokemon);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
