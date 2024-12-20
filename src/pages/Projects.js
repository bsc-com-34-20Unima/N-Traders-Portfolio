import React from "react";

function Projects() {
  const projects = [
    { title: "Project 1", description: "A React application", link: "#" },
    { title: "Project 2", description: "A Node.js backend", link: "#" },
    { title: "Project 3", description: "A full-stack project", link: "#" },
  ];

  return (
    <div style={styles.container}>
      <h1>My Projects</h1>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} style={styles.project}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  projectList: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" },
  project: { padding: "1rem", border: "1px solid #ccc", borderRadius: "5px" },
};

export default Projects;
