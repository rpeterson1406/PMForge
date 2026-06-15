import { experience } from "../data/siteContent";
import "./Timeline.css";

export function Timeline() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <div key={item.company} className="timeline-item">
          <div className="company">{item.company}</div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
