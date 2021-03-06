import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./store";
import {Provider} from "react-redux";
import "./axios.config";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import axios from 'axios'


axios.interceptors.request.use(function (config) {
    config.headers.authorization = localStorage.getItem("token");
    return config;
}, function (error) {
    return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
