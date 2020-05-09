import React from "react";
import Carosel from "./Carosel";
import jungleAppImages from "../images/jungleAppImages";
import "normalize.css";

export default function Portfolio() {
  console.log(jungleAppImages);
  return (
    <section>
      <Carosel images={jungleAppImages} />
    </section>
  );
}
