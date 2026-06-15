import { Link } from "react-router-dom";
import "./Shell.css";

type ShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function Shell({ children, className = "" }: ShellProps) {
  return <div className={`shell ${className}`.trim()}>{children}</div>;
}

export function Noise() {
  return <div className="noise" aria-hidden="true" />;
}

export function Brand() {
  return (
    <Link className="brand" to="/">
      <img className="brand-mark" src="/assets/logo.png" alt="PMForge.ai logo" width={38} height={38} />
      <span>PMForge.ai</span>
    </Link>
  );
}
