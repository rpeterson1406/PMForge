import { Button } from "./Button";
import { ShowcaseOrb } from "./ShowcaseOrb";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span className="pulse" />
            AI projects, prototypes, build logs, and practical systems
          </div>
          <h1>
            AI product experiments, <span className="gradient-text">forged</span> into
            real-world systems.
          </h1>
          <p>
            PMForge.ai is a curated showcase of AI product experiments, working prototypes,
            case studies, and applied systems built to solve real operational problems.
          </p>
          <div className="hero-actions">
            <Button to="/projects" variant="primary">
              View Projects →
            </Button>
            <Button to="/blog">Read Product Thinking</Button>
          </div>
        </div>
        <ShowcaseOrb />
      </div>
    </section>
  );
}
