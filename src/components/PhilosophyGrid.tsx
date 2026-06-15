import { principles } from "../data/siteContent";
import "./PhilosophyGrid.css";

export function PhilosophyGrid() {
  return (
    <div className="philosophy-grid">
      {principles.map((principle) => (
        <div key={principle.title} className="principle">
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </div>
      ))}
    </div>
  );
}
