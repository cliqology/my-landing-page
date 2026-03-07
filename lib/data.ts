export interface Tool {
  id: string;
  title: string;
  description: string;
  tag: string;
  href: string;
  status: "available" | "coming-soon";
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  tag: string;
  href: string;
  date: string;
}

export const tools: Tool[] = [
  {
    id: "revenue-diagnostics",
    title: "Revenue Diagnostics",
    description:
      "Identify revenue leaks and prioritize growth opportunities across your SaaS funnel with a structured AI-driven diagnostic framework.",
    tag: "Strategy",
    href: "/tools/revenue-diagnostics",
    status: "coming-soon",
  },
  {
    id: "website-teardown",
    title: "Website Teardown",
    description:
      "Get a sharp, operator-level critique of your website's positioning, messaging, and conversion flow — with specific, actionable recommendations.",
    tag: "Marketing",
    href: "/tools/website-teardown",
    status: "coming-soon",
  },
  {
    id: "resume-optimizer",
    title: "Resume Optimizer",
    description:
      "Transform your resume from a job history into a performance document precisely aligned to the roles you actually want to land.",
    tag: "Career",
    href: "/tools/resume-optimizer",
    status: "coming-soon",
  },
  {
    id: "startup-explainer",
    title: "Startup Explainer",
    description:
      "Translate your startup's vision into crisp, compelling language that resonates with investors, customers, and the press.",
    tag: "Positioning",
    href: "/tools/startup-explainer",
    status: "coming-soon",
  },
];

export const experiments: Experiment[] = [
  {
    id: "ai-operator-playbook",
    title: "The AI Operator Playbook",
    description:
      "A living document of hard-won lessons from building and deploying AI tools in real business contexts. No hype — just patterns that work.",
    tag: "Playbook",
    href: "/experiments/ai-operator-playbook",
    date: "2025",
  },
  {
    id: "positioning-problem",
    title: "The Positioning Problem",
    description:
      "Most SaaS companies can't clearly describe what they do or who it's for. Here's a diagnostic framework for fixing it before it costs you pipeline.",
    tag: "Strategy",
    href: "/experiments/positioning-problem",
    date: "2025",
  },
  {
    id: "zero-to-prompt",
    title: "Zero to Prompt",
    description:
      "Notes from my first 90 days building with AI — what worked, what didn't, and what I'd do differently if I started over today.",
    tag: "Build Log",
    href: "/experiments/zero-to-prompt",
    date: "2025",
  },
];
