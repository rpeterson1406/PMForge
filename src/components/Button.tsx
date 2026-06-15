import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "nav";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  children,
  to,
  href,
  variant = "secondary",
  type = "button",
  className = "",
  onClick,
  external,
}: ButtonProps) {
  const classes = `btn ${variant === "primary" ? "primary" : ""} ${variant === "nav" ? "nav-cta" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
