import React from "react";
import "normalize.css";
import Carosel from "../Carosel";
import skillsImages from "../skills/skillsImages";
import "./profile.scss";

export default function Profile() {
  return (
    <article>
      <p>This is Profile</p>
      <h2>About Me</h2>
      <p>
        I am a fullstack web developer who studied at Lighthouse Labs in their 3
        month, 12hr/day Web Development bootcamp. I always had a passion for
        creating websites and other related media. I enjoy experimenting with
        new ideas, and I always keep up with the latest UI/UX trends.
      </p>
      <h3>Education</h3>
      <p></p>
      <h3>Skills</h3>
      <Carosel
        className="profile-carosel"
        images={skillsImages}
        visibleSlides="5"
        naturalSlideHeight="1"
        naturalSlideWidth="2"
      />
      <h3>Find me elsewhere:</h3>
    </article>
  );
}
