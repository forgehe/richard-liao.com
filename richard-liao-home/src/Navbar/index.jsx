import React, { useState, useRef } from "react";
import "normalize.css";
import "./navbar.scss";
import { useClickAway } from "react-use";
import { IoIosMenu } from "react-icons/io";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setExpanded(false);
  });
  const projectSites = () => {
    return (
      <Link
        containerId="home"
        smooth={true}
        activeClass="active"
        to="projects"
        duration={500}
      >
        <h2>Projects</h2>
      </Link>
    );
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
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="home"
            duration={500}
          >
            <h2>Richard Liao</h2>
          </Link>
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="about"
            duration={500}
          >
            <h2>About</h2>
          </Link>
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="contact"
            duration={500}
          >
            <h2>Contact</h2>
          </Link>
          {projectSites()}
        </div>
      </nav>
    </>
  );
}
