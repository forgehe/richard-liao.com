import React from "react";
import Carosel from "../Carosel";
import "normalize.css";
import "./portfolio.scss";

export default function Portfolio(props) {
  const { images, title, description, link, github } = props;
  console.log(images);
  return (
    <section className="project" id={`project-` + title}>
      <div className="project-header">
        <h4 className="project-header-title">{title}</h4>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-carosel">
        <Carosel images={images} />
        <div className="project-carosel-links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Site
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            View Github
          </a>
        </div>
      </div>
    </section>
  );
}
