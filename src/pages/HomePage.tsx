import { Hero } from "../components/Hero";
import { SectionLayout } from "../components/SectionLayout";
import { ProjectCard } from "../components/ProjectCard";
import { FocusGrid } from "../components/FocusGrid";
import { PhilosophyGrid } from "../components/PhilosophyGrid";
import { Timeline } from "../components/Timeline";
import { ContactForm } from "../components/ContactForm";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <Hero />
      <SectionLayout
        id="projects"
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
      <SectionLayout
        id="focus"
        kicker="AI Focus Areas"
        title="The showcase is organized around practical AI patterns."
        description="PMForge.ai focuses on systems that combine useful automation, clear product thinking, and credible implementation."
      >
        <FocusGrid />
      </SectionLayout>
      <SectionLayout
        id="thinking"
        kicker="Product Thinking"
        title="AI as a product capability, not a gimmick."
        description="The goal is not to add a chatbot. The goal is to solve a real user problem better, faster, and with less friction."
      >
        <PhilosophyGrid />
      </SectionLayout>
      <SectionLayout
        id="experience"
        kicker="Experience Signal"
        title="Product judgment behind the showcase."
        description="The systems are informed by experience building customer experiences, marketplaces, digital products, and operational platforms."
      >
        <Timeline />
      </SectionLayout>
      <SectionLayout
        id="contact"
        kicker="Contact"
        title="Reach out about projects, collaboration, or AI product work."
        description="Send a message through the form or email directly. Typical topics include AI systems, product strategy, workflow automation, and practical build feedback."
      >
        <ContactForm />
      </SectionLayout>
    </>
  );
}
