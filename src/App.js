import React from "react";
import "./App.css";

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
