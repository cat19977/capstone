import React from "react";
import App from './App.js'
import About from './About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

export default function Routerr() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
      </Router>
    );
  }
  