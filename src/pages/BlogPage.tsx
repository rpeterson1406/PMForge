import { SectionLayout } from "../components/SectionLayout";
import { PhilosophyGrid } from "../components/PhilosophyGrid";

export function BlogPage() {
  return (
    <SectionLayout
      kicker="Product Thinking"
      title="AI as a product capability, not a gimmick."
      description="The goal is not to add a chatbot. The goal is to solve a real user problem better, faster, and with less friction."
    >
      <PhilosophyGrid />
    </SectionLayout>
  );
}
