import { Link, useLocation } from "react-router-dom";
import { Brand } from "./Shell";
import { Button } from "./Button";
import "./Navigation.css";

const links = [
  { label: "Projects", to: "/projects", match: "/projects" },
  { label: "Focus Areas", to: "/#focus", match: "/#focus" },
  { label: "Product Thinking", to: "/blog", match: "/blog" },
  { label: "Experience", to: "/about", match: "/about" },
  { label: "Contact", to: "/contact", match: "/contact" },
];

export function Navigation() {
  const { pathname, hash } = useLocation();

  function isActive(match: string) {
    if (match === "/#focus") return pathname === "/" && hash === "#focus";
    return pathname === match;
  }

  return (
    <header className="site-header shell">
      <div className="nav">
        <Brand />
        <nav aria-label="Main">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.match) ? "active" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button to="/projects" variant="nav">
          View Projects
        </Button>
      </div>
    </header>
  );
}
