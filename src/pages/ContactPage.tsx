import { SectionLayout } from "../components/SectionLayout";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
  return (
    <SectionLayout
      kicker="Contact"
      title="Reach out about projects, collaboration, or AI product work."
      description="Send a message through the form or email directly. Typical topics include AI systems, product strategy, workflow automation, and practical build feedback."
    >
      <ContactForm />
    </SectionLayout>
  );
}
