export const profile = {
  name: "Soumyasree Sabat",
  role: "Backend Engineer & Adversarial Systems Designer",
  tagline: "A multidisciplinary hybrid engineer",
  headline: "Securing, Building, & Orchestrating The Future of Tech",
  summary:
    "I construct secure-by-design software systems, resilient cloud pipelines, and high-performance AI-enabled products for teams that care about reliability.",
  email: "sabat.soumya.official@gmail.com",
  github: "https://github.com/Soumya-Sabat",
  linkedin : "https://www.linkedin.com/in/soumyasree-sabat-74a6372ba/",
  resume: "/files/resume.pdf",
  insta:""
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
  { value: "1+", label: "Years Experience" },
  { value: "0", label: "Security Audits" },
  { value: "4+", label: "Production Apps" },
  { value: "8", label: "Smart Contracts" },
];

export const projectDomains = [
  "All",
  "Cybersecurity",
  "DevOps / SRE",
  "Blockchain",
  "Full Stack",
  "AI / ML",
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
    status: "Live",
    description:
      "High-speed automated recon toolkit designed to detect dangling DNS records, open S3 buckets, and misconfigured SPF records with proof-of-concept generation.",
    impact: "",
    metric: "",
    domain: "Cybersecurity",
    techStack: ["Rust", "DNSSEC", "Security", "Bug Bounty API"],
  },
  {
    title: "Zero-Trust Multi-Region Kubernetes Orchestrator",
    status: "Futured",
    description:
      "Terraform and ArgoCD platform for mTLS service mesh, progressive delivery, and policy-driven workload isolation.",
    impact: "8 production clusters",
    metric: "99.98% platform uptime",
    domain: "DevOps / SRE",
    techStack: ["Kubernetes", "Terraform", "DevOps", "mTLS"],
  },
  {
    title: "Vortex: Gas-Optimized Decentralized Lending",
    status: "Commited",
    description:
      "Solidity lending protocol with liquidation bots, invariant tests, and automated vault risk scoring.",
    impact: "36 invariant tests",
    metric: "28% gas reduction",
    domain: "Blockchain",
    techStack: ["Solidity", "Foundry", "Blockchain", "Security"],
  },
  {
    title: "Scribe: Collaborative Real-Time Documentation",
    status: "Live",
    description:
      "Realtime workspace using CRDT synchronization, granular permissions, and searchable version history.",
    impact: "Sub-80ms sync loop",
    metric: "12k documents indexed",
    domain: "Full Stack",
    techStack: ["Next.js", "TypeScript", "Postgres", "Full Stack"],
  },
  {
    title: "NeuroScrobe: On-Device LLM Fine-Tuning Pipeline",
    status: "Research - Live",
    description:
      "Private edge inference workflow for fine-tuning compact models on sensitive local datasets.",
    impact: "Local-first training",
    metric: "42% smaller adapters",
    domain: "AI / ML",
    techStack: ["PyTorch", "Transformers", "AI / ML", "LoRA"],
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
    body: "Multidiciplinary Subjects",
  },
  {
    period: "2020 - 2022",
    title: "Intermediate Student",
    body: "Focused on STEM Mastery, Competitive Readiness, and Scientific Excellence",
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
    title: "Advent Of Cyber 2025",
    date: "Dec 2025",
    credential: "THM-OZNB92QIFE",
  },
  {
    provider: "ISC2 - CISSP ",
    title: "Certificate of Completion",
    date: "May 2026-2029",
    credential: "a67b9f94-2a78-4d8e-a992-df207e6989de",
  },
];

export const hackathons = [
  {
    category: "Artifical Intelligence",
    title: "SIH - State Level",
    date: "Jun 2025",
    result: "",
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
