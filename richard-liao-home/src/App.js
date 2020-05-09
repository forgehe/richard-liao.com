import React from "react";
import "./App.scss";
import "normalize.css";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Profile from "./Profile";

import projectsList from "./projects/projectsList";

function App() {
  const generateProjects = () => {
    return projectsList.map((project) => <Portfolio {...project} />);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        {generateProjects()}
        <Profile />
      </div>
    </div>
  );
}

export default App;
