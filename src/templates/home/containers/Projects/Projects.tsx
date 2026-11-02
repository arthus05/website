import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { projects } from "@/content/portfolio";

const Projects = () => (
  <section id="projects" className="content-section" aria-labelledby="projects-title">
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">01</span>
      <h2 id="projects-title">Selected work</h2>
      <span className="section-note">A few things I’ve helped build</span>
    </div>
    <div className="project-list">
      {projects.map((project, index) => (
        <article className="project" key={project.id} aria-labelledby={project.id + "-title"}>
          <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-content">
            <p className="eyebrow project-company">{project.company}</p>
            <h3 id={project.id + "-title"}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="technology-list">{project.technologies}</p>
            <div className="project-actions">
              <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                {project.linkLabel}<FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <details className="project-details">
              <summary><span>My contribution<span className="sr-only"> to {project.company}</span></span><FiPlus aria-hidden="true" /></summary>
              <div className="case-study">
                <h4>The context</h4>
                <p>{project.context}</p>
                <h4>What I worked on</h4>
                <ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
                <h4>The result</h4>
                <p>{project.result}</p>
              </div>
            </details>
          </div>
        </article>
      ))}
    </div>
    <p className="section-footnote">These are team projects. Links provide public product or company context; most of my work lives in private codebases.</p>
  </section>
);

export default Projects;
