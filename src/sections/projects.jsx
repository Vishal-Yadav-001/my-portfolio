import  ProjectData  from "../data/projects.json";

const Projects = () => {
  return (
    <div className="projects-container">
      {ProjectData.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <h4 className="project-tagline">{project.tagline}</h4>
          <p className="project-description">{project.description}</p>

          <h5>Features:</h5>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <h5>Tech Stack:</h5>
          <ul className="tech-stack">
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

          <p className="key-contribution">
            <strong>Key Contribution: </strong>
            {project.keyContribution}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
