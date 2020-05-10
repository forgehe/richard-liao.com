import React, { useState, useRef } from "react";
import "normalize.css";
import "./navbar.scss";
import { useClickAway } from "react-use";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setExpanded(false);
  });
  const projectSites = () => {
    return <h2>Portfolios</h2>;
  };
  return (
    <>
      <nav
        ref={ref}
        className={expanded ? "sidebar" : "sidebar sidebar--hidden"}
      >
        <IoIosMenu
          className={
            !expanded
              ? "sidebar__button"
              : "sidebar__button sidebar__button--hidden"
          }
          onClick={() => setExpanded(!expanded)}
          size="3em"
        />
        <div className={expanded ? "navbar" : "navbar navbar--hidden"}>
          <h2>Richard Liao</h2>
          <h2>About</h2>
          <h2>Contact Me</h2>
          {projectSites()}
        </div>
      </nav>
    </>
  );
}
