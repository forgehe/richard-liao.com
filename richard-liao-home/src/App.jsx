import React from "react";
import "./App.scss";
import "normalize.css";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Portfolio />
        <Profile />
      </div>
    </div>
  );
}

export default App;
