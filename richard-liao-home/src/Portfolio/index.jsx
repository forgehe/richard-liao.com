import React from "react";
import Carosel from "../Carosel";
import "normalize.css";
import "./portfolio.scss";

export default function Portfolio(props) {
  const { images, title, description, link } = props;
  console.log(images);
  return (
    <section className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h4>{title}</h4>
      </a>
      <p>{description}</p>
      <Carosel className="portfolio-carosel" images={images} />
    </section>
  );
}
