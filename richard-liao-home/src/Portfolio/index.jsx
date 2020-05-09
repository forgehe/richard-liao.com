import React from "react";
import Carosel from "./Carosel";
import "normalize.css";

export default function Portfolio(props) {
  const { images, title, description, link } = props;
  console.log(images);
  return (
    <section>
      <a href={link}>
        <h4>{title}</h4>
      </a>
      <p>{description}</p>
      <Carosel images={images} />
    </section>
  );
}
