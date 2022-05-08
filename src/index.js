import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { currentCityReducer } from "./redux/Reducers/currentCityReducer";
import { favoritesReducer } from "./redux/Reducers/favoritesReducer";
import thunk from "redux-thunk";

const mainReducer = combineReducers({
  currentCityReducer,
  favoritesReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
