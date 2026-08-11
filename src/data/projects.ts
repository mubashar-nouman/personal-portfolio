import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 7,
    title: "ZygenAI",
    tagline: "AI support agents for marketplace sellers",
    description:
      "A customer support platform that answers buyer messages automatically using live order data. It reads each message, pulls real tracking and delivery details, and replies in the seller's own voice in under 30 seconds — grounded in verified order records rather than guesswork.",
    highlights: [
      "Context-aware replies backed by live tracking, carrier and delivery data",
      "Escalation rules that route disputes and refunds to a human instead of answering",
      "Configurable reply tone and full conversation memory across a thread",
      "eBay marketplace integration over OAuth with orders syncing every two minutes",
      "Subscription billing and per-store analytics with spreadsheet export",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Stripe"],
    image: "/projects/zygenai.jpg",
    year: "2025",
    category: "SaaS",
    demoLink: "https://zygenai.com/",
  },
  {
    id: 1,
    title: "SkillPet",
    tagline: "Gamified AI learning platform with subscriptions",
    description:
      "A learn-mode SaaS platform that turns AI courses into a habit. Learners get streaks, XP, gems and lives alongside a companion pet that keeps them coming back, while a Pro tier unlocks the full catalog and premium lessons.",
    highlights: [
      "Daily streak and XP engine that tracks per-course progress across the week",
      "Course catalog with progress, achievements and personalised recommendations",
      "Subscription billing with a free tier and gated Pro catalog access",
      "Responsive dashboard shell with sidebar navigation and profile management",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
    image: "/projects/skillpet.jpeg",
    year: "2025",
    category: "SaaS",
    featured: true,
  },
  {
    id: 2,
    title: "MX Bot",
    tagline: "One interface for every LLM",
    description:
      "A centralized platform that lets teams access and compare multiple LLM models in one place, removing the overhead of managing separate provider integrations and API keys.",
    highlights: [
      "Unified chat interface routing to multiple model providers",
      "Secure API key handling and per-conversation model switching",
      "Persistent chat history with real-time streamed responses",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "Redux"],
    image: "/projects/mx-bot.png",
    year: "2025",
    category: "AI",
    demoLink: "https://mxbot-frontend.vercel.app/",
    codeLink: "https://github.com/mubashar-nouman/mxbot-frontend",
  },
  {
    id: 6,
    title: "Support Desk AI",
    tagline: "Ask questions about your own documents",
    description:
      "A document assistant that answers questions grounded in files you upload. The source document opens beside the chat, so you can read the original and interrogate it at the same time instead of trusting the answer blind.",
    highlights: [
      "RAG pipeline that chunks and embeds uploads, then retrieves only the passages needed to answer",
      "Answers cited back to their source document instead of returned unattributed",
      "Document ingestion for TXT, MD, CSV, JSON, LOG and PDF, with text extracted per page",
      "Split-pane workspace pairing the source document with the assistant",
      "Multi-chat sessions so separate lines of questioning stay isolated",
    ],
    tags: ["Python", "FastAPI", "RAG", "Gemini API", "Vector DB"],
    image: "/projects/support-desk-ai.png",
    year: "2025",
    category: "AI",
    demoLink: "https://support-desk-ai-eight.vercel.app/",
  },
  {
    id: 3,
    title: "AI Content Generator",
    tagline: "Marketing copy on demand",
    description:
      "A content SaaS that generates blog, social and marketing copy from predefined prompt templates, so non-technical teams can produce on-brand drafts without writing prompts themselves.",
    highlights: [
      "Template-driven prompt library for repeatable content formats",
      "Credit-based usage tracking tied to user accounts",
      "Clean editor workflow from generation through to export",
    ],
    tags: ["Next.js", "ShadCN", "Node.js", "Express", "MongoDB"],
    image: "/projects/ai-content.png",
    year: "2025",
    category: "AI",
    demoLink: "https://ai-saas-next-react-js.vercel.app/",
    codeLink: "https://github.com/mubashar-nouman/ai-saas-next-react-js",
  },
  {
    id: 4,
    title: "AI Chatbot Provider",
    tagline: "Trained support bots for any website",
    description:
      "A white-label chatbot service that lets site owners train an assistant on their own content, then embed it to answer visitor questions automatically.",
    highlights: [
      "Owner-supplied knowledge base powering grounded responses",
      "Embeddable widget that drops into any existing site",
      "Per-tenant configuration and conversation logging",
    ],
    tags: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
    image: "/projects/ai-chatbot-provider.jpeg",
    year: "2024",
    category: "AI",
  },
  {
    id: 5,
    title: "AI Resume Builder",
    tagline: "Tailored resumes from a job description",
    description:
      "A React Native app where users build a profile once, then paste any job description to generate a resume targeted to that role, with multi-step onboarding and LinkedIn job integration.",
    highlights: [
      "Multi-step onboarding that captures a reusable candidate profile",
      "Job-description-aware resume generation and export",
      "LinkedIn job feed integration for applying in-app",
    ],
    tags: ["React Native", "FastAPI", "PostgreSQL", "OpenAI API"],
    image: "/projects/job-app.jpg",
    year: "2025",
    category: "Mobile",
  },
];
