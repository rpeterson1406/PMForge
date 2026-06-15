import { focusAreas } from "../data/siteContent";
import "./FocusGrid.css";

export function FocusGrid() {
  return (
    <div className="focus-grid">
      {focusAreas.map((area) => (
        <div key={area.title} className="focus-card">
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </div>
      ))}
    </div>
  );
}
