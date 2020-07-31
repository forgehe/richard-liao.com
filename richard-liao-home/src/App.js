import React, { useEffect } from "react";
import "./App.scss";
import "normalize.css";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Header from "./Header";

import projectsList from "./projects/projectsList";

function App() {
  const generateProjects = () => {
    return projectsList.map((project, iterator) => (
      <div
        key={iterator}
        className={`project-spacer + ${
          iterator % 2 === 0 ? "project-even" : "project-odd"
        }`}
      >
        <Portfolio key={iterator} {...project} />
      </div>
    ));
  };
  useEffect(() => {
    document.title = "Richard Liao's Portfolio";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main className="body" id="home">
        <Header />
        <div className="about-me" id="about">
          <h2 className="bg-title">ABOUT ME</h2>
          <Profile />
        </div>
        <div className="projects" id="test1">
          <h2 className="bg-title">PROJECTS</h2>
          {generateProjects()}
        </div>
      </main>
    </div>
  );
}

export default App;
