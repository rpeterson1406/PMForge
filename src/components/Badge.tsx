import "./Badge.css";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "chip" | "status" | "category";
};

export function Badge({ children, variant = "chip" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
