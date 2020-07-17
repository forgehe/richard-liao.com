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
      "A group project for our finals to create a meal planner website, pulling data from the spoonacular api. I was mostly in charge of the frontend features in React, while also helping out with getting and transforming the data pulled from the spoonacular API.",
    stack:
      "Frontend using React with Material UI, Backend with Ruby on Rails API connected to an ElepantSQL database.",
    link: "https://meezr.richard-liao.com",
    github: "https://github.com/pratikbassi/Meezr",
    images: meezrImages,
  },
  {
    title: "Jungle",
    description:
      "Made in Ruby on Rails, this is to learn about implementing new features onto an existing project.",
    stack: "Frontend using ERB, Backend with Ruby on Rails.",
    github: "https://github.com/forgehe/jungle-app",
    images: jungleAppImages,
  },
  {
    title: "Scheduler",
    description:
      "Made with React, this is a website to schedule meetings created to learn about React and updating state.",
    github: "https://github.com/forgehe/scheduler",
    images: schedulerImages,
  },
  {
    title: "kupit",
    description:
      "Made with Express and JQuery, this was a group midterm project to create a online buy/sell marketplace.",
    stack:
      "Frontend using SASS and JQuery. Backend using ExpressJS and PostgreSQL.",
    github: "https://github.com/pratikbassi/kupit",
    images: kupitImages,
  },
  {
    title: "Tweeter",
    description:
      "Made with Express and JQuery, this is a simple twitter clone to learn about AJAX calls.",
    github: "https://github.com/forgehe/tweeter",
    images: tweeterImages,
  },
  {
    title: "Tinyapp",
    description:
      "Made with Express and EJS, this is a website to shorten URLs, created to learn about Express and EJS files.",
    github: "https://github.com/forgehe/tinyapp",
    images: tinyappImages,
  },
];

export default projectsList;
