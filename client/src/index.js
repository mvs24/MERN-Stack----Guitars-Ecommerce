import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

 const store = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


let app = (
  <Provider
    store={store(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
