export type Project = {
  id: string;
  number: string;
  status: string;
  title: string;
  description: string;
  tags: string[];
  glowIndex: number;
  caseStudyPath?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "shipment-intelligence",
    number: "01",
    status: "Build log",
    title: "Shipment Intelligence Platform",
    description:
      "An AI-assisted shipment tracker for e-commerce orders. Monitors status changes, separates multiple user accounts, and sends daily delivery summaries.",
    tags: ["OpenAI", "Supabase", "Vercel Cron", "Email Alerts"],
    glowIndex: 1,
  },
  {
    id: "hoa-knowledge",
    number: "02",
    status: "Prototype",
    title: "HOA Knowledge Platform",
    description:
      "A retrieval-based assistant that answers homeowner association questions from rules, policies, documents, and meeting materials with source citations.",
    tags: ["RAG", "Pinecone", "Vector Search", "React"],
    glowIndex: 2,
  },
  {
    id: "openai-usage",
    number: "03",
    status: "Concept",
    title: "OpenAI Usage Monitor",
    description:
      "A dashboard and alerting system that tracks API usage, estimates monthly costs, and sends warnings when daily usage exceeds thresholds.",
    tags: ["API Usage", "Dashboard", "Weekly Email", "Cost Controls"],
    glowIndex: 3,
  },
  {
    id: "fitness-engine",
    number: "04",
    status: "Product idea",
    title: "Fitness Programming Engine",
    description:
      "An AI-supported workout generator that balances muscle groups, avoids repeated exercises, respects equipment constraints, and stores accepted classes.",
    tags: ["Rules Engine", "Exercise DB", "AI Recommendations", "Supabase"],
    glowIndex: 4,
  },
  {
    id: "gas-price-agent",
    number: "05",
    status: "Build log",
    title: "Gas Price Agent",
    description:
      "An AI agent that monitors local fuel prices, compares stations, and sends alerts when prices drop or spike — helping drivers time fill-ups and save money.",
    tags: ["AI Agents", "Price Monitoring", "Alerts", "Automation"],
    glowIndex: 5,
  },
  {
    id: "sports-roast",
    number: "Generative AI",
    status: "AI Application",
    title: "Sports Roast",
    description:
      "AI-powered sports comedy application that uses advanced prompt engineering, persona design, and conversational memory to generate context-aware roasts tailored to any team.",
    tags: [
      "Advanced Prompt Engineering",
      "Conversational AI",
      "Persona Design",
      "OpenAI API",
      "React",
    ],
    glowIndex: 6,
    caseStudyPath: "/projects/sports-roast",
    demoUrl: "https://sports-roast.pmforge.ai",
  },
];
