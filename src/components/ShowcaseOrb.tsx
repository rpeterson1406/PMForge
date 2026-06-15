import { Badge } from "./Badge";
import {
  showcaseMetrics,
  showcaseSystems,
  showcaseTags,
} from "../data/siteContent";
import "./ShowcaseOrb.css";

export function ShowcaseOrb() {
  return (
    <div className="orb-card" aria-label="PMForge showcase dashboard preview">
      <div className="interface">
        <div className="window-bar">PMForge Showcase Index</div>
        <div className="interface-scroll">
          <div className="metric-row">
            {showcaseMetrics.map((metric) => (
              <div key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          {showcaseSystems.map((system) => (
            <div key={system.title} className="system-card">
              <h3>{system.title}</h3>
              <p>{system.description}</p>
            </div>
          ))}
          <div className="stack">
            {showcaseTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
