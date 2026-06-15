import type { Project } from "../data/projects";
import { Badge } from "./Badge";
import { Button } from "./Button";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project project-glow-${project.glowIndex}`}>
      <div className="project-top">
        <Badge variant="category">{project.number}</Badge>
        <Badge variant="status">{project.status}</Badge>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="mini-stack">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {(project.caseStudyPath || project.demoUrl) && (
        <div className="project-actions">
          {project.caseStudyPath && (
            <Button to={project.caseStudyPath}>View Case Study</Button>
          )}
          {project.demoUrl && (
            <Button href={project.demoUrl} variant="primary" external>
              Launch Live Demo →
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
