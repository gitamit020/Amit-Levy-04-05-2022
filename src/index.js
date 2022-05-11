import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { currentCityReducer } from "./redux/Reducers/currentCityReducer";
import { favoritesReducer } from "./redux/Reducers/favoritesReducer";
import { preferencesReducer } from "./redux/Reducers/preferencesReducer";
import { generalReducer } from "./redux/Reducers/generalReducer";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favoritesReducer", "preferencesReducer"],
};

const mainReducer = combineReducers({
    currentCityReducer,
    favoritesReducer,
    preferencesReducer,
    generalReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const Persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={Persistor}>
                <HashRouter>
                    <App />
                </HashRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
