import { SectionLayout } from "../components/SectionLayout";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <SectionLayout
      kicker="Featured Projects"
      title="Applied AI concepts shaped into product case studies."
      description="Each project is presented through the lens of user problem, system design, workflow, tools, constraints, and lessons learned."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
}
