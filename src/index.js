// @flow

require('dotenv').config({path: '../'})

import React from "react";
import ReactDOM from "react-dom";
import backand from "@backand/vanilla-sdk";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from "./Containers/App";

import user from "./user/userReducer";
import items from "./items/itemsReducer";

import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

backand.init &&
  backand.init({
    appName: process.env.REACT_APP_BACKAND_APPNAME,
    signUpToken: process.env.REACT_APP_BACKAND_SIGNUPTOKEN,
    anonymousToken: process.env.REACT_APP_BACKAND_ANONYMOUSTOKEN,
    runSocket: false
  });

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const rootReducer = combineReducers({
  user,
  items
});

const initialState = {};

let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
