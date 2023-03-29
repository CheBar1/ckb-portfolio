import React from "react";
import "../index.css";
import "../components/Project.css";
/* By importing the Project.css file, it is added to the DOM whenever this component loads */

function Project({ title, description, deployedLink, githubLink, image }) {
// The Project function accepts the props of title, description, etc passed from the Portfolio Component.
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img alt={title} src={image} />
      </div>

      <div className="project-content">
        <p className="project-card-title">{title}</p>
        <p class="proj-icons-container">
          <a href={githubLink}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={deployedLink}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="Live Application"
            />
          </a>
        </p>
        <p class="topics">{description}</p>
      </div>
    </div>
  );
}

export default Project;
