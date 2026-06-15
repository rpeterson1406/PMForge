import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import "./CaseStudyPage.css";

export type CaseStudyHero = {
  category: string;
  status: string;
  title: string;
  subtitle: string;
  lead: string;
  tags: string[];
  demoUrl: string;
};

type CaseStudyPageProps = {
  hero: CaseStudyHero;
  mockup?: ReactNode;
  children: ReactNode;
  results?: string;
  ctaTitle?: string;
  ctaText?: string;
};

export function CaseStudyPage({
  hero,
  mockup,
  children,
  results,
  ctaTitle = "Try the Demo",
  ctaText = "Experience the live application.",
}: CaseStudyPageProps) {
  return (
    <div className="case-study-page shell">
      <section className="cs-hero">
        <div className="cs-hero-copy">
          <div className="cs-hero-meta">
            <span className="cs-kicker">{hero.category}</span>
            <Badge variant="status">{hero.status}</Badge>
          </div>
          <h1 className="cs-title">{hero.title}</h1>
          <p className="cs-subtitle">{hero.subtitle}</p>
          <p className="cs-lead">{hero.lead}</p>
          <div className="cs-hero-actions">
            <Button href={hero.demoUrl} variant="primary" external>
              Launch Live Demo ↗
            </Button>
            <Button to="/projects">Back to Projects</Button>
          </div>
          <div className="cs-tags">
            {hero.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        {mockup}
      </section>

      <div className="cs-content">{children}</div>

      {(results || hero.demoUrl) && (
        <section className="cs-bottom-row">
          {results && (
            <article className="cs-results">
              <h2 className="cs-section-title">
                <span className="cs-section-icon">📊</span> Results & Learnings
              </h2>
              <p>{results}</p>
            </article>
          )}
          <aside className="cs-cta-box">
            <h2>
              <span>🚀</span> {ctaTitle}
            </h2>
            <p>{ctaText}</p>
            <Button href={hero.demoUrl} variant="primary" external>
              Launch Live Demo ↗
            </Button>
            <Button to="/projects" className="cs-cta-link-btn">
              View More AI Projects →
            </Button>
          </aside>
        </section>
      )}
    </div>
  );
}

export function CaseStudySection({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="cs-section-block">
      <h2 className="cs-section-title">
        <span className="cs-section-icon">{icon}</span> {title}
      </h2>
      {children}
    </section>
  );
}

export function CaseStudyGrid({
  columns = 2,
  children,
}: {
  columns?: 2 | 3 | 4;
  children: ReactNode;
}) {
  return <div className={`cs-grid cols-${columns}`}>{children}</div>;
}

export function CaseStudyCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: string;
}) {
  return (
    <article className="cs-card">
      {icon && (
        <div className="cs-card-head">
          <span className="cs-section-icon">{icon}</span>
          <h3>{title}</h3>
        </div>
      )}
      {!icon && <h3>{title}</h3>}
      <div className="cs-card-body">{children}</div>
    </article>
  );
}
