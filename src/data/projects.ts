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
    id: "ai-product-strategy",
    number: "Product Intelligence",
    status: "Orchestration Platform",
    title: "AI Product Strategy Platform",
    description:
      "Transform customer feedback, market signals, and business priorities into data-driven product strategy recommendations using AI-powered discovery, evaluation, and roadmap planning.",
    tags: [
      "Agentic AI",
      "Multi-Agent",
      "MCP",
      "LLMs",
      "Optimization",
      "Decision Intelligence",
    ],
    glowIndex: 1,
  },
  {
    id: "operations-floor-planning",
    number: "Workflow Management",
    status: "Optimization Engine",
    title: "Operations Floor Planning & Configurator",
    description:
      "A visual planning system for modeling physical environments, allocating resources, and optimizing workflows through configurable constraints, capacity requirements, and operational rules.",
    tags: [
      "Layout Modeling",
      "Rules Engine",
      "Resource Allocation",
      "Capacity Planning",
    ],
    glowIndex: 2,
    caseStudyPath: "#",
    demoUrl: "https://floor-planner.pmforge.ai",
  },
  {
    id: "ai-evaluation-quality",
    number: "AI Quality",
    status: "AI Governance Framework",
    title: "AI Evaluation & Quality Framework",
    description:
      "Automates testing, benchmarking, and quality assessment of AI applications to identify hallucinations, regressions, performance issues, and cost tradeoffs before they impact users.",
    tags: [
      "AI Evaluation",
      "Benchmarking",
      "Hallucination Detection",
      "Regression Testing",
      "Observability",
      "Quality Scoring",
    ],
    glowIndex: 3,
  },
  {
    id: "community-knowledge",
    number: "Knowledge Intelligence",
    status: "GraphRAG System",
    title: "Community Governance Intelligence Platform",
    description:
      "Transforms complex governing documents, policies, and meeting records into an intelligent knowledge system that delivers accurate answers, citations, and relationship-based insights using GraphRAG.",
    tags: [
      "GraphRAG",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Knowledge Graphs",
      "Document Intelligence",
    ],
    glowIndex: 4,
  },
  {
    id: "agentic-finops",
    number: "AI Governance",
    status: "Autonomous System",
    title: "Agentic AI FinOps Platform",
    description:
      "Uses autonomous AI agents to monitor usage, investigate anomalies, optimize costs, and execute predefined corrective actions while escalating complex issues that require human review.",
    tags: [
      "Agentic AI",
      "AI Observability",
      "FinOps",
      "Automation",
      "Anomaly Detection",
      "Root Cause Analysis",
    ],
    glowIndex: 5,
  },
  {
    id: "sports-roast",
    number: "Generative AI",
    status: "Conversational AI App",
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
