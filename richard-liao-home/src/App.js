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
      <div className="project-spacer">
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
      <main className="body">
        <Header />
        {generateProjects()}
        <Profile />
      </main>
    </div>
  );
}

export default App;
