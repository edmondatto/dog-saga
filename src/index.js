import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMIddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { reducer } from "./redux";
import { watcherSaga } from "./sagas";

// Create the Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// DevTools Middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();

// Create the Redux Store
let store = createStore(
  reducer,
  compose(applyMIddleware(sagaMiddleware), reduxDevTools)
);

// Run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
