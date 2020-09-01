import React from "react";
import ReactDOM from "react-dom";

// UI ANT DESIGN
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux-Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

// components
import App from "./App";

// Reducers
import allReducers from "./reducers";
import UpDownContainer from "./components/UpDownClass";

// Middleware
const sagaMiddleware = createSagaMiddleware();

// Store
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
debugger; // Todo by MongLV

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
