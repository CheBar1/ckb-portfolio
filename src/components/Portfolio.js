import React from "react";
import Project from "./Project";
import 'bootstrap/dist/css/bootstrap.min.css';

import textEditor from "./../assets/images/textEditor.png";
import socialNetworkApi from "./../assets/images/socialNetworkApi.png";
import techBlog from "./../assets/images/techBlog.png";
import employeeTracker from "./../assets/images/employeeTracker.png";
import teamProfileGenerator from "./../assets/images/teamProfileGenerator.png";
import workDayScheduler from "./../assets/images/workDayScheduler.png";
import musicBook from "./../assets/images/musicBook.png";

const projects = [
  {
    title: "Music Book",
    description: "MERN Stack, MongoDB, GraphQL,JavaScript, React, Apollo Server Express",
    deployedLink: "https://dry-wildwood-53100.herokuapp.com/",
    githubLink: "https://github.com/CheBar1/music-book ",
    image: musicBook,
  },
  {
    title: "Text Editor",
    description:
      "JavaScript, Node.js, Express.js, Webpack, Babel, IndexedDB/IDB",
    deployedLink: "https://mysterious-reef-06963.herokuapp.com/",
    githubLink: "https://github.com/CheBar1/text-editor",
    image: textEditor,
  },
  {
    title: "Social Network API",
    description:
      "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Moment",
    deployedLink:
      "https://drive.google.com/file/d/1QFEJ4rg9yn1scgb3ct0I9HJVaRfbJNXd/view",
    githubLink: "https://github.com/CheBar1/social-network-api",
    image: socialNetworkApi,
  },
  {
    title: "Tech Blog",
    description: "MySQL, Handlebars, MVC paradigm, RESTful API",
    deployedLink: "https://young-savannah-76133.herokuapp.com/",
    githubLink: "https://github.com/CheBar1/tech-blog2",
    image: techBlog,
  },
  {
    title: "Employee Tracker",
    description: "JavaScript, jQuery, Inquirer, MySQL2",
    deployedLink:
      "https://drive.google.com/file/d/1xLGc6egHD_B5Nn3UnN0sFkv9CnrkGAt-/view",
    githubLink: "https://github.com/CheBar1/employee-tracker",
    image: employeeTracker,
  },
  {
    title: "Team Profile Generator",
    description: "JavaScript, Node.js, jQuery, Bootstrap, Jest",
    deployedLink:
      "https://drive.google.com/file/d/1bx21w2RdMyMCzXP6qdD0I2IyvNGO7VdK/view",
    githubLink: "https://github.com/CheBar1/team-profile-generator",
    image: teamProfileGenerator,
  },
  {
    title: "Work Day Scheduler",
    description: "JavaScript, jQuery, HTML, CSS, Moment",
    deployedLink: "https://chebar1.github.io/work-day-scheduler/",
    githubLink: "https://github.com/CheBar1/work-day-scheduler",
    image: workDayScheduler,
  },
];

function Portfolio() {
  return (
    <section className="container">
       
      <div className="project">
        <h2 className="top-title">Portfolio</h2>
        <hr></hr>
        </div>

        <section id="card-data">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </section>
    </section>
  );
}

export default Portfolio;
