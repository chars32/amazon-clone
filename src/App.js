import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './state/StateProvider'

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Checkout from "./Components/Checkout.jsx";
import Login from "./Components/Login.jsx";

import firebaseApp from "./firebase.js";
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() => {
    // will only run once when the app component loads...
    firebaseApp.auth().onAuthStateChanged(authUser => {
      console.log('USER IS: ', authUser)
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
