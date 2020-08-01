import React, { useState, useRef, useEffect } from "react";
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

import projectsList from "../projects/projectsList";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setExpanded(false);
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    // console.log(`buttonClicked = ${buttonClicked}`);
    let delayNavClose = setTimeout(() => {
      setExpanded(false);
    }, 600);

    return () => {
      // console.log(`1 delayNavClose = ${delayNavClose}`);
      clearTimeout(delayNavClose);
      // console.log(`2 delayNavClose = ${delayNavClose}`);
      setButtonClicked(false);
    };
  }, [buttonClicked]);

  const projectSites = () => {
    return (
      <>
        <Link
          containerId="home"
          smooth={true}
          activeClass="active"
          to="projects"
          duration={500}
          offset={-100}
          onClick={() => setButtonClicked(true)}
        >
          <h2>Projects</h2>
        </Link>
        <ul>
          {projectsList.map((project, iterator) => (
            <Link
              key={iterator}
              containerId="home"
              smooth={true}
              activeClass="active"
              to={`project-` + project.title}
              duration={500}
              offset={-100}
              onClick={() => setButtonClicked(true)}
            >
              <h3>{project.title}</h3>
            </Link>
          ))}
        </ul>
      </>
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
          size="5rem"
        />
        <div className={expanded ? "navbar" : "navbar navbar--hidden"}>
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="home"
            duration={500}
            onClick={() => setButtonClicked(true)}
          >
            <h2>Richard Liao</h2>
          </Link>
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="about"
            duration={500}
            onClick={() => setButtonClicked(true)}
          >
            <h2>About</h2>
          </Link>
          <Link
            containerId="home"
            smooth={true}
            activeClass="active"
            to="contact"
            duration={500}
            onClick={() => setButtonClicked(true)}
          >
            <h2>Contact</h2>
          </Link>
          {projectSites()}
        </div>
      </nav>
    </>
  );
}
