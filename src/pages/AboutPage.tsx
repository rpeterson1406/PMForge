import { SectionLayout } from "../components/SectionLayout";
import { Timeline } from "../components/Timeline";

export function AboutPage() {
  return (
    <SectionLayout
      kicker="Experience Signal"
      title="Product judgment behind the showcase."
      description="The systems are informed by experience building customer experiences, marketplaces, digital products, and operational platforms."
    >
      <Timeline />
    </SectionLayout>
  );
}
