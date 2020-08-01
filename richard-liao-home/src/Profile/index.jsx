import React from "react";
import "normalize.css";
import Carosel from "../Carosel";
import skillsImages from "../skills/skillsImages";
import "./profile.scss";

export default function Profile() {
  return (
    <article className="profile">
      <p className="profile-description">
        I am a fullstack web developer who studied at Lighthouse Labs in their 3
        month, 12hr/day Web Development bootcamp. I always had a passion for
        creating websites and other related media. I enjoy experimenting with
        new ideas, and I always keep up with the latest UI/UX trends.
      </p>
      <div className="profile-education">
        <h3>Education</h3>
        <p>Lighthouse Labs - April 2020</p>
      </div>
      <div className="profile-skills">
        <div className="profile-skills-content">
          <h3>Skills</h3>
          <ul>
            <h4>Frontend</h4>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>WordPress</li>
            <li>EJS Templates</li>
          </ul>
          <ul>
            <h4>Backend</h4>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>Django</li>
            <li>Nginx</li>
          </ul>
        </div>
        <Carosel
          className="profile-skills-carosel"
          images={skillsImages}
          visibleSlides="2"
          naturalSlideHeight="1"
          naturalSlideWidth="2"
          step="2"
          dragStep="2"
        />
      </div>
      <nav className="profile-links">
        <h3>Find me elsewhere:</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/richard-r-liao/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/forgehe">GitHub</a>
          </li>
          <li>Fiverr (coming soon)</li>
        </ul>
      </nav>
    </article>
  );
}
