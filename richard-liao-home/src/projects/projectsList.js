import meezrImages from "./meezrImages";
import jungleAppImages from "./jungleAppImages";
import schedulerImages from "./schedulerImages";
import kupitImages from "./kupitImages";
import tweeterImages from "./tweeterImages";
import tinyappImages from "./tinyappImages";

const projectsList = [
  {
    title: "Meezr",
    description:
      "A group final project for Lighthouse Labs to create a meal planner website, pulling data from the spoonacular api. I was mostly in charge of the frontend features in React, while also helping out with getting and transforming the data pulled from the spoonacular API.",
    stack:
      "Frontend using React with Material UI, Backend with Ruby on Rails API connected to an ElepantSQL database.",
    link: "https://meezr.richard-liao.com",
    github: "https://github.com/pratikbassi/Meezr",
    images: meezrImages,
  },
  {
    title: "Jungle",
    description:
      "This project was to get experience with implementing new features onto an existing project. We were tasked with adding a new admin page, fixing visual bugs on the site, and implementing the checkout page using Stripe's API.",
    stack: "Frontend using ERB, Backend with Ruby on Rails.",
    github: "https://github.com/forgehe/jungle-app",
    images: jungleAppImages,
  },
  {
    title: "Scheduler",
    description:
      "A website for scheduling meetings, created to learn about functional React and how updating states works in React.",
    stack: "Frontend using React. Testing with Cypress and Storybook.",
    github: "https://github.com/forgehe/scheduler",
    images: schedulerImages,
  },
  {
    title: "kupit",
    description:
      "This was a group midterm project to create an online buy/sell marketplace. Main contributions was to the inital html scaffolding, SCSS, and AJAX calls to ExpressJS. Was also involved in writing helper functions for Express to communicate with PostgreSQL",
    stack:
      "Frontend using Bootstrap, SASS and JQuery. Backend with ExpressJS and PostgreSQL.",
    github: "https://github.com/pratikbassi/kupit",
    images: kupitImages,
  },
  {
    title: "Tweeter",
    description:
      "A simple twitter clone to learn about AJAX calls and CSS styling. An exercise in sending AJAX calls and rendering the data on the page.",
    stack: "Frontend using JQuery and SCSS. Backend with ExpressJS.",
    github: "https://github.com/forgehe/tweeter",
    images: tweeterImages,
  },
  {
    title: "Tinyapp",
    description:
      "A website to shorten URLs, created to learn about Express and EJS files.",
    stack: "Frontend using JavaScript and HTML. Backend with ExpressJS.",
    github: "https://github.com/forgehe/tinyapp",
    images: tinyappImages,
  },
];

export default projectsList;
