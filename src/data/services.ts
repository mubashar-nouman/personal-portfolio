import type { Service, ProcessStep } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    title: "AI SaaS Development",
    description:
      "End-to-end AI products: LLM integrations, chat interfaces, and the billing and auth layers that turn them into a business.",
    deliverables: [
      "LLM and OpenAI API integration",
      "Subscription billing and usage limits",
      "Multi-tenant auth and user management",
    ],
    icon: 'sparkles',
  },
  {
    id: 2,
    title: "Full Stack Web Apps",
    description:
      "Production web applications built on React and Next.js with a typed, well-structured backend behind them.",
    deliverables: [
      "React / Next.js frontends",
      "REST APIs in Node.js or FastAPI",
      "PostgreSQL and MongoDB data modeling",
    ],
    icon: 'layout',
  },
  {
    id: 3,
    title: "MVP Builds for Founders",
    description:
      "Take an idea to a working, demoable product fast, without the shortcuts that force a rewrite six months later.",
    deliverables: [
      "Scoping and technical planning",
      "Shippable MVP with core flows",
      "Deployment and handover documentation",
    ],
    icon: 'server',
  },
  {
    id: 4,
    title: "Mobile Apps",
    description:
      "Cross-platform React Native applications sharing one codebase across iOS and Android.",
    deliverables: [
      "React Native app development",
      "Backend and API integration",
      "App store release support",
    ],
    icon: 'smartphone',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery call",
    description:
      "We talk through the problem, your users and your constraints. You leave with a clear view of scope, whether or not we work together.",
  },
  {
    id: 2,
    title: "Proposal & plan",
    description:
      "A written breakdown of deliverables, timeline and cost. Fixed scope up front, so there are no surprise invoices later.",
  },
  {
    id: 3,
    title: "Build in sprints",
    description:
      "Weekly demos of working software. You see progress continuously and can redirect early instead of at the end.",
  },
  {
    id: 4,
    title: "Launch & handover",
    description:
      "Deployment, documentation and a walkthrough of the codebase, plus a support window to settle anything post-launch.",
  },
];
