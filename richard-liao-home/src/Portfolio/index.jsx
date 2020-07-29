import React from "react";
import Carosel from "../Carosel";
import "normalize.css";
import "./portfolio.scss";

export default function Portfolio(props) {
  const { images, title, description, link, github, stack } = props;
  // console.log(images);
  return (
    <section className="project" id={`project-` + title}>
      <div className="project-header">
        <h4 className="project-header-title">{title}</h4>
        <h5 className="project-header-stack">{"Stack: " + stack}</h5>
      </div>
      <div className="project-content">
        <p className="project-description">{description}</p>
        <a
          className="project-content-buttons"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Site
        </a>
        <a
          className="project-content-buttons"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Github
        </a>
      </div>
      <div className="project-carosel">
        <Carosel images={images} />
      </div>
    </section>
  );
}
