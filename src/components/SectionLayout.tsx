import "./SectionLayout.css";

type SectionLayoutProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionLayout({ id, kicker, title, description, children }: SectionLayoutProps) {
  return (
    <section id={id} className="section shell">
      <div className="section-head">
        <div>
          {kicker && <div className="kicker">{kicker}</div>}
          <h2>{title}</h2>
        </div>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}
