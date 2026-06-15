import type { ReactNode } from "react";
import "../styles/sportsRoast.css";

export function SportsRoastCaseStudyPage() {
  return (
    <main className="sr-page">
      <section className="sr-hero sr-card">
        <div className="sr-hero-copy">
          <div className="sr-eyebrow">GENERATIVE AI PROJECT</div>

          <h1>Sports Roast</h1>
          <h2>AI Entertainment Application</h2>

          <p>
            AI-powered sports comedy app that generates context-aware roasts
            using prompt engineering, persona design, and conversational memory.
          </p>

          <div className="sr-actions">
            <a
              className="sr-primary"
              href="https://sports-roast.pmforge.ai"
              target="_blank"
              rel="noreferrer"
            >
              Launch Live Demo ↗
            </a>

            <a className="sr-secondary" href="/">
              Back to Projects
            </a>
          </div>

          <div className="sr-tags">
            <span>Advanced Prompt Engineering</span>
            <span>Persona Design</span>
            <span>Context Management</span>
            <span>OpenAI API</span>
            <span>React</span>
          </div>
        </div>

        <div className="sr-demo-card">
          <div className="sr-demo-header">
            <strong>🔥 SPORTS ROAST</strong>
            <span>
              Roast Intensity <em>MEDIUM⌄</em>
            </span>
          </div>

          <div className="sr-demo-main">
            <div>
              <p>Roasting the</p>
              <h3>Dallas Cowboys</h3>
            </div>
            <div className="sr-star">☆</div>
          </div>

          <div className="sr-roast-bubble">
            The Cowboys haven’t won a Super Bowl this century, but don’t
            worry... they’ve been really consistent at not doing it. 😂
          </div>

          <div className="sr-input-row">
            <div>Tell me another roast...</div>
            <button>Roast Again</button>
          </div>
        </div>
      </section>

      <section className="sr-two-grid">
        <InfoCard icon="ⓘ" title="1. Product Overview">
          Sports Roast lets fans enter a team and receive a customized
          AI-generated roast. The experience is designed to feel like sports-bar
          banter: funny, current, conversational, and tailored to the team.
        </InfoCard>

        <InfoCard icon="☆" title="Why It Matters">
          Most AI demos generate generic responses. Sports Roast explores how
          LLMs can be shaped into a repeatable entertainment product with tone
          control, context awareness, and user-driven conversation.
        </InfoCard>
      </section>

      <section className="sr-section sr-card">
        <SectionTitle icon="◎" title="2. The Challenge" />

        <div className="sr-challenge-grid">
          <Challenge emoji="😂" text="Generate jokes that feel specific, not generic" />
          <Challenge emoji="🗓️" text="Stay grounded in recent sports context" />
          <Challenge emoji="🛡️" text="Avoid fake stats or invented facts" />
          <Challenge emoji="🎚️" text="Adjust roast intensity" />
          <Challenge emoji="💬" text="Maintain conversational continuity" />
          <Challenge emoji="❤️" text="Stay entertaining without becoming toxic" />
        </div>
      </section>

      <section className="sr-section sr-card">
        <SectionTitle icon="🧠" title="3. AI Product Approach" />

        <div className="sr-three-grid">
          <Feature icon="▻" title="Prompt Engineering">
            Dynamic prompts assemble team, league, tone, intensity, and response
            rules.
          </Feature>

          <Feature icon="🎭" title="Persona Design">
            The model is guided to behave like a sharp but playful sports
            comedian.
          </Feature>

          <Feature icon="🟢" title="Context Management">
            The app maintains prior user inputs and conversation flow so
            follow-up jokes remain relevant.
          </Feature>
        </div>
      </section>

      <section className="sr-section sr-card">
        <SectionTitle icon="⚙" title="4. How It Works" />

        <div className="sr-flow">
          <FlowItem icon="👤" text="User selects team" />
          <FlowItem icon="📄" text="Prompt builder adds context, tone, and guardrails" />
          <FlowItem icon="◎" text="OpenAI generates roast" />
          <FlowItem icon="💬" text="Response is returned in conversational UI" />
          <FlowItem icon="↻" text="User continues the banter" last />
        </div>
      </section>

      <section className="sr-two-grid">
        <section className="sr-section sr-card">
          <SectionTitle icon="♙" title="5. Prompt Engineering Complexity" />

          <ul className="sr-check-list">
            <li>
              <strong>Temporal grounding:</strong> Keeps the AI focused on
              recent team narratives instead of outdated references.
            </li>
            <li>
              <strong>Intensity scaling:</strong> Supports different roast
              levels while maintaining appropriate tone.
            </li>
            <li>
              <strong>Hallucination reduction:</strong> Constrains the model
              from inventing fake records, fake player stats, or unsupported
              claims.
            </li>
            <li>
              <strong>Persona consistency:</strong> Maintains a consistent
              voice across multiple turns.
            </li>
            <li>
              <strong>Conversational memory:</strong> Keeps follow-up responses
              tied to the same team and prior exchange.
            </li>
          </ul>
        </section>

        <section className="sr-section sr-card">
          <SectionTitle icon="&lt;/&gt;" title="6. Tech Stack" />

          <div className="sr-stack-list">
            <Stack icon="⚛" title="Frontend" text="React · Responsive Web UI" />
            <Stack icon="◎" title="AI Layer" text="OpenAI API · GPT Model" />
            <Stack
              icon="▣"
              title="Application Logic"
              text="Prompt orchestration · Conversation state · Guardrails"
            />
            <Stack
              icon="▲"
              title="Deployment"
              text="Vercel · Custom PMForge subdomain"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="sr-title-row">
      <span className="sr-section-icon">{icon}</span>
      <h3>{title}</h3>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="sr-info-card sr-card">
      <SectionTitle icon={icon} title={title} />
      <p>{children}</p>
    </section>
  );
}

function Challenge({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="sr-challenge">
      <div>{emoji}</div>
      <p>{text}</p>
    </div>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="sr-feature">
      <span>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

function FlowItem({
  icon,
  text,
  last,
}: {
  icon: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div className="sr-flow-item">
      <div className="sr-flow-icon">{icon}</div>
      <p>{text}</p>
      {!last && <span className="sr-flow-arrow">→</span>}
    </div>
  );
}

function Stack({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="sr-stack">
      <span>{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}