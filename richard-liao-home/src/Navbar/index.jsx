import React, { useState, useRef } from "react";
import "normalize.css";
import "./navbar.scss";
import { useClickAway } from "react-use";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setExpanded(!expanded);
  });
  const projectSites = () => {
    return <h2>Portfolios</h2>;
  };
  return (
    <>
      <nav ref={ref}>
        {!expanded && (
          <button onClick={() => setExpanded(!expanded)}>Open</button>
        )}
        <div className={expanded ? "navbar" : "navbar navbar-hidden"}>
          <h2>Richard Liao</h2>
          <h2>About</h2>
          <h2>Contact Me</h2>
          {projectSites()}
        </div>
      </nav>
    </>
  );
}
