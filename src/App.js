import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Checkout from "./Components/Checkout.jsx";

import "./App.css";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
