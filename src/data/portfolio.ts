export const profile = {
  name: "Soumyasree Sabat",
  role: "Backend Engineer & Adversarial Systems Designer",
  tagline: "I build backend systems, then attack them.",
  headline: "Secure Backend Systems Built To Survive Pressure",
  summary:
    "I design backend APIs, automation, and cloud workflows with a security-first engineering mindset. The goal is simple: systems that are observable, testable, and difficult to break.",
  email: "sabat.soumya.official@gmail.com",
  github: "https://github.com/Soumya-Sabat",
  linkedin : "https://www.linkedin.com/in/soumyasree-sabat-74a6372ba/",
  resume: "/files/resume1.pdf",
  insta:""
};

export const expertise = [
  {
    title: "Build",
    detail: "APIs, backend services, product workflows",
    accent: "from-[#d6aa45] to-[#f0d991]",
  },
  {
    title: "Harden",
    detail: "Threat modeling, secure defaults, observability",
    accent: "from-[#d6aa45] to-[#f0d991]",
  },
  {
    title: "Attack",
    detail: "Recon automation, API testing, exploit-safe validation",
    accent: "from-[#d6aa45] to-[#f0d991]",
  },
];

export const stats = [
  { value: "4+", label: "Shipped App Builds" },
  { value: "5", label: "Case-Study Projects" },
  { value: "3", label: "Security-First Workflows" },
  { value: "1", label: "Clear Engineering Thesis" },
];

export const proofHighlights = [
  "Backend work framed around reliability, observability, and clean failure paths.",
  "Security work focused on recon automation, threat modeling, and exploit-safe validation.",
  "Cloud, blockchain, and AI used as supporting systems, not scattered identities.",
];

export const projectDomains = [
  "All",
  "Cybersecurity",
  "DevOps / SRE",
  "Blockchain",
  "Full Stack",
  "AI / ML",
];

export const workingPrinciples = [
  {
    title: "I start with failure paths",
    body: "Before writing the happy path, I map what can break: auth boundaries, data trust, retries, rate limits, and abuse cases.",
    signal: "Threat modeling first",
  },
  {
    title: "I build APIs like products",
    body: "Readable contracts, predictable errors, observability, and clean deployment paths matter as much as the endpoint itself.",
    signal: "Backend with ownership",
  },
  {
    title: "I validate by attacking",
    body: "I use recon, API testing, and exploit-safe checks to pressure-test assumptions before users or attackers find the weak spots.",
    signal: "Builder + breaker mindset",
  },
];

export const workflowSteps = [
  "Model the system and its trust boundaries",
  "Ship the smallest reliable backend surface",
  "Instrument logs, metrics, and failure signals",
  "Attack the assumptions and harden the result",
];

export const capabilityGroups = [
  {
    title: "Backend Core",
    description: "APIs, data models, auth flows, and service boundaries.",
    tools: ["Node.js", "Next.js APIs", "Postgres"],
  },
  {
    title: "Security Lens",
    description: "Threat modeling, recon automation, and API abuse checks.",
    tools: ["OWASP Top 10", "Recon", "STRIDE"],
  },
  {
    title: "Delivery Layer",
    description: "Repeatable deployments, containers, and infrastructure-as-code.",
    tools: ["Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Specialized Systems",
    description: "AI workflows and smart-contract logic when the product needs them.",
    tools: ["RAG", "Solidity", "Foundry"],
  },
];

export const projects = [
  {
    title: "Aegis: Automated Subdomain Takeover & Exploit Engine",
    status: "Live",
    description:
      "Problem: manual recon spreads DNS, storage, and SPF checks across separate tools. Approach: Aegis batches those checks into one proof-oriented workflow. Result: 3 misconfiguration classes surfaced in a single report.",
    impact: "3 misconfiguration classes",
    metric: "Single recon report",
    domain: "Cybersecurity",
    techStack: ["Rust", "DNSSEC", "Security", "Bug Bounty API"],
    proofPoints: ["Dangling DNS detection", "Misconfiguration checks", "PoC-ready reporting"],
  },
  {
    title: "Zero-Trust Multi-Region Kubernetes Orchestrator",
    status: "Planned",
    description:
      "Problem: multi-service platforms drift when delivery, policy, and network trust are configured by hand. Approach: Terraform and ArgoCD define repeatable service mesh controls. Result: 8-cluster reference architecture for isolated workloads.",
    impact: "8-cluster reference design",
    metric: "Policy-first delivery model",
    domain: "DevOps / SRE",
    techStack: ["Kubernetes", "Terraform", "DevOps", "mTLS"],
    proofPoints: ["Policy-driven isolation", "Progressive delivery", "mTLS service mesh"],
  },
  {
    title: "Vortex: Gas-Optimized Decentralized Lending",
    status: "Committed",
    description:
      "Problem: lending flows fail when liquidation and vault risk are treated as afterthoughts. Approach: Vortex pairs Solidity contracts with invariant tests and automated risk scoring. Result: 36 invariants and a measured 28% gas reduction target.",
    impact: "36 invariant tests",
    metric: "28% gas reduction",
    domain: "Blockchain",
    techStack: ["Solidity", "Foundry", "Blockchain", "Security"],
    proofPoints: ["Invariant testing", "Liquidation flow design", "Vault risk scoring"],
  },
  {
    title: "Scribe: Collaborative Real-Time Documentation",
    status: "Live",
    description:
      "Problem: collaborative docs need low-latency editing without losing permissions or history. Approach: Scribe uses CRDT sync, granular access, and indexed revisions. Result: sub-80ms sync loop with searchable document history.",
    impact: "Sub-80ms sync loop",
    metric: "12k documents indexed",
    domain: "Full Stack",
    techStack: ["Next.js", "TypeScript", "Postgres", "Full Stack"],
    proofPoints: ["CRDT sync", "Granular permissions", "Searchable history"],
  },
  {
    title: "NeuroScrobe: On-Device LLM Fine-Tuning Pipeline",
    status: "Research - Live",
    description:
      "Problem: sensitive datasets should not always leave the device for model adaptation. Approach: NeuroScrobe keeps compact fine-tuning and inference local. Result: 42% smaller adapters for private edge workflows.",
    impact: "Local-first training",
    metric: "42% smaller adapters",
    domain: "AI / ML",
    techStack: ["PyTorch", "Transformers", "AI / ML", "LoRA"],
    proofPoints: ["Local-first training", "Private edge inference", "Compact adapters"],
  },
  // {
  //   title: "",
  //   status: "",
  //   description:
  //     "",
  //   impact: "",
  //   metric: "",
  //   domain: "",
  //   techStack: [],
  // },
];

export const education = [
  {
    period: "2009 - 2020",
    title: "Student",
    body: "Built a broad base across mathematics, computer fundamentals, and analytical problem solving.",
  },
  {
    period: "2020 - 2022",
    title: "Intermediate Student",
    body: "Focused on STEM mastery, competitive readiness, and scientific reasoning.",
  },
  {
    period: "2023 - Present",
    title: "B.Tech. Candidate",
    body: "Researching AI-assisted vulnerability discovery and resilient infrastructure systems.",
  },
];

export const certifications = [
  {
    provider: "TryHackMe",
    title: "Advent of Cyber 2025",
    date: "Dec 2025",
    credential: "THM-OZNB92QIFE",
  },
  {
    provider: "ISC2",
    title: "CISSP - Certified Information Systems Security Professional",
    date: "May 2026",
    credential: "a67b9f94-2a78-4d8e-a992-df207e6989de",
  },
];

export const hackathons = [
  {
    category: "Artifical Intelligence",
    title: "SIH - State Level",
    date: "Jun 2025",
    result: "State-level prototype build",
    description:
      "Build optimization-driven systems that model constraints, allocate resources, and eliminate scheduling conflicts.",
    tags: ["NextJS" , "GoogleSDK" , "Scheduling Algorithms"],
  },
  // {
  //   category: "AI / Offensive Security",
  //   title: "Global AI Defense Hackathon - Runner Up",
  //   date: "Apr 2025",
  //   result: "Best Security Implementation Award",
  //   description:
  //     "Created a multi-agent defensive system that autonomously prioritizes threat intelligence and generates exploit-safe remediations.",
  //   tags: ["Python", "OpenAI", "RAG", "Docker"],
  // },
];
