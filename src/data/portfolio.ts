export const profile = {
  name: "Soumyasree Sabat",
  role: "Multidomain Engineer",
  tagline: "A multidisciplinary hybrid engineer",
  headline: "Securing, Building, & Orchestrating The Future of Tech",
  summary:
    "I construct secure-by-design software systems, resilient cloud pipelines, and high-performance AI-enabled products for teams that care about reliability.",
  email: "sabat.soumya.official@gmail.com",
  github: "https://github.com/Soumya-Sabat",
  resume: "/files/resume.pdf",
};

export const expertise = [
  {
    title: "Offensive Security",
    detail: "Pentesting, exploit research, APIs, cloud attack paths",
    accent: "from-rose-500 to-red-600",
  },
  {
    title: "DevOps / SRE",
    detail: "Kubernetes, CI/CD, observability, incident response",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Blockchain Dev",
    detail: "Smart contracts, audits, integrations, wallet flows",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Full Stack",
    detail: "React, Next.js, Node, APIs, scalable product systems",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "AI / ML Engineering",
    detail: "RAG apps, model pipelines, evals, automation",
    accent: "from-emerald-400 to-teal-600",
  },
];

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "32+", label: "Security Audits" },
  { value: "45+", label: "Production Apps" },
  { value: "18", label: "Smart Contracts" },
];

export const projectTags = [
  "All",
  "Rust",
  "Kubernetes",
  "Solidity",
  "Next.js",
  "PyTorch",
];

export const securitySkills = [
  { name: "Penetration Testing", level: "Expert" },
  { name: "Reverse Engineering", level: "Advanced" },
  { name: "Active Directory Attacks", level: "Expert" },
  { name: "Exploit Development & Bug Chaining", level: "Advanced" },
  { name: "Web/API Security OWASP Top 10", level: "Expert" },
  { name: "Threat Modeling & STRIDE", level: "Expert" },
];

export const projects = [
  {
    title: "Aegis: Automated Subdomain Takeover & Exploit Engine",
    status: "Office Active",
    description:
      "High-speed automated recon toolkit designed to detect dangling DNS records, open S3 buckets, and misconfigured SPF records with proof-of-concept generation.",
    impact: "2,500+ Assets/recon",
    metric: "0% false positives on validated POCs",
    tags: ["Rust", "DNSSEC", "Security", "Bug Bounty API"],
  },
  {
    title: "Zero-Trust Multi-Region Kubernetes Orchestrator",
    status: "Shipped",
    description:
      "Terraform and ArgoCD platform for mTLS service mesh, progressive delivery, and policy-driven workload isolation.",
    impact: "8 production clusters",
    metric: "99.98% platform uptime",
    tags: ["Kubernetes", "Terraform", "DevOps", "mTLS"],
  },
  {
    title: "Vortex: Gas-Optimized Decentralized Lending",
    status: "Audited",
    description:
      "Solidity lending protocol with liquidation bots, invariant tests, and automated vault risk scoring.",
    impact: "36 invariant tests",
    metric: "28% gas reduction",
    tags: ["Solidity", "Foundry", "Blockchain", "Security"],
  },
  {
    title: "Scribe: Collaborative Real-Time Documentation",
    status: "Live",
    description:
      "Realtime workspace using CRDT synchronization, granular permissions, and searchable version history.",
    impact: "Sub-80ms sync loop",
    metric: "12k documents indexed",
    tags: ["Next.js", "TypeScript", "Postgres", "Full Stack"],
  },
  {
    title: "NeuroScrobe: On-Device LLM Fine-Tuning Pipeline",
    status: "Research",
    description:
      "Private edge inference workflow for fine-tuning compact models on sensitive local datasets.",
    impact: "Local-first training",
    metric: "42% smaller adapters",
    tags: ["PyTorch", "Transformers", "AI / ML", "LoRA"],
  },
];

export const education = [
  {
    period: "2015 - 2018",
    title: "B.Sc. in Computer Science",
    body: "Specialized in cyber security, distributed systems, and secure software engineering.",
  },
  {
    period: "2020 - 2022",
    title: "M.Sc. in Machine Learning",
    body: "Focused on adversarial ML, anomaly detection, and AI-driven security operations.",
  },
  {
    period: "2023 - Present",
    title: "Ph.D. Candidate (Part-Time)",
    body: "Researching AI-assisted vulnerability discovery and resilient infrastructure systems.",
  },
];

export const certifications = [
  {
    provider: "Offensive Security",
    title: "OSCP Offensive Security Certified Professional",
    date: "2021",
    credential: "OS-101-2021",
  },
  {
    provider: "Amazon Web Services",
    title: "AWS Certified DevOps Engineer - Professional",
    date: "2022",
    credential: "AWS-DEP-2022",
  },
  {
    provider: "Blockchain Training Alliance",
    title: "Certified Blockchain Solutions Architect",
    date: "2023",
    credential: "BTA-BCSA",
  },
  {
    provider: "Google / TensorFlow",
    title: "TensorFlow Developer Certificate",
    date: "2025",
    credential: "TFDC-2025",
  },
];

export const hackathons = [
  {
    category: "Blockchain / Cryptography",
    title: "ETHGlobal San Francisco - 1st Place Winner",
    date: "Jun 2023",
    result: "$10,000 Main Prize + Sponsor Pool",
    description:
      "Built a zk-backed compliance layer for tokenized assets with selective disclosure and automated policy verification.",
    tags: ["Solidity", "Circom", "Noir", "Ethereum"],
  },
  {
    category: "AI / Offensive Security",
    title: "Global AI Defense Hackathon - Runner Up",
    date: "Apr 2025",
    result: "Best Security Implementation Award",
    description:
      "Created a multi-agent defensive system that autonomously prioritizes threat intelligence and generates exploit-safe remediations.",
    tags: ["Python", "OpenAI", "RAG", "Docker"],
  },
];
