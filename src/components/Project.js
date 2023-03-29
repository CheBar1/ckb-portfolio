import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Project({ title, description, deployedLink, githubLink, image }) {
// The Project function accepts the props of title, description, etc passed from the Portfolio Component.
  return (
    <div className="card">
      <div className="img-container">
        <img alt={title} src={image} />
      </div>

      <div className="content">
        <p className="card-title">{title}</p>
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
      <h4 className="center">{title}</h4>
    </div>
  );
}

export default Project;
