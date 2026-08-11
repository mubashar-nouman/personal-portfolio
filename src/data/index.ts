import {
  Project,
  Experience,
  Education,
  Certification,
  Testimonial,
  BlogPost,
  SpeakingEvent,
  OpenSourceContribution,
  Award,
  Hobby,
  Service,
  ProcessStep
} from '../types';

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
    id: 8,
    title: "ScriptLix",
    tagline: "A marketplace for production-ready screenplays",
    description:
      "A curated catalog where independent filmmakers read screenplays free online and buy the ones they want to produce. Every purchase delivers the script in PDF, TXT and Fountain, so it drops straight into a writer's existing toolchain.",
    highlights: [
      "Browsable catalog with genre collections, editor's picks and trending scripts",
      "Free in-browser reader gated against paid downloads",
      "Checkout issuing PDF, TXT and Fountain exports per purchase",
      "Accounts with a personal library of purchased scripts",
      "Editorial section for craft guides and industry resources",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/projects/scriptlix.jpg",
    year: "2025",
    category: "Web",
    demoLink: "https://scriptlix.com/",
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

export const experiences: Experience[] = [
  {
    id: 1,
    company: "PyFlow Labs",
    position: "Full Stack Software Engineer",
    duration: "2024 - Present",
    description: [
      "Built and maintained the Chatbot Provider platform integrating multiple AI models under one interface with real-time chat capabilities and secure API access.",
      "Led the development of a React Native Job Application app with multi-step user onboarding, AI-powered resume builder, and LinkedIn job integration.",
      "Contributed to the Westend Dental web app using the MERN stack, implementing dynamic form systems, secure admin panel, and efficient patient record management.",
      "Collaborated across teams to deliver scalable and user-centric solutions, ensuring clean architecture and reusable components."
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Express.js", "Pyhton", "Flask", "FastAPI", "Tailwind CSS", "ShadCN", "React Native", "Next.js"],
    location: "Lahore"
  },
  {
    id: 2,
    company: "OCloud Solutions",
    position: "Backend Developer",
    duration: "2023 - 2024",
    description: [
      "Assisted in developing RESTful APIs using Node.js and Express.js for basic CRUD operations.",
      "Wrote and tested simple SQL queries and contributed to managing PostgreSQL schemas.",
      "Fixed minor bugs and supported integration of backend APIs with frontend components.",
      "Worked closely with senior developers to learn best practices in backend development and improve code quality."
    ],
    technologies: ["JavaScript", "TypeScript", "Node.Js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    location: "Lahore"
  },
  {
    id: 3,
    company: "Alf.Ain Technologies",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    description: [
      "Developed modern, responsive web interfaces using React.js, HTML, CSS, and JavaScript.",
      "Built reusable components and design systems using Ant Design to speed up UI development.",
      "Ensured pixel-perfect designs by closely collaborating with UI/UX designers.",
      "Improved performance and SEO through code splitting and lazy loading.",
      "Optimized for cross-browser compatibility and accessibility standards."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.Js", "Ant Design"],
    location: "Lahore"
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "University of Engineering and Technology, Lahore",
    degree: "Bachelor's in Computer Science",
    duration: "2019 - 2023",
    description: "Completed a thesis on optimizing neural networks for edge devices, with an emphasis on performance and efficiency in resource-constrained environments."
  },
  {
    id: 2,
    institution: "The Educators College, Chichawatni",
    degree: "FSC in Pre-Engineering",
    duration: "2017 - 2019",
    description: "Studied advanced mathematics, physics, and computer science. Participated in various coding competitions and hackathons."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Next.js & React - Build a Real App",
    issuer: "Udemy",
    date: "2022",
    link: "https://www.udemy.com/certificate/UC-64ad52ea-0e99-4691-b84b-796a67f1840a/"
  },
  {
    id: 2,
    title: "Frontend Developer",
    issuer: "Meta (Coursera)",
    date: "2021",
    link: "https://coursera.com"
  },
  {
    id: 3,
    title: "Python for Beginners",
    issuer: "Google",
    date: "2020",
    link: "https://google.com"
  }
];

/**
 * Real client testimonials only.
 *
 * Add an entry per genuine quote you have permission to publish. The
 * Testimonials section hides itself entirely while this array is empty, so
 * nothing fabricated ever ships. Template:
 *
 * {
 *   id: 1,
 *   name: "Client name",
 *   position: "Their role",
 *   company: "Their company",
 *   testimonial: "What they actually said.",
 *   avatar: "/testimonials/their-photo.jpg", // or "" to render initials
 * }
 */
export const testimonials: Testimonial[] = [];

/**
 * Real posts only. Add entries as you publish; the Blog section hides itself
 * while this array is empty rather than showing placeholder articles.
 */
export const blogPosts: BlogPost[] = [];

/** Real talks only — add entries as you speak at events. */
export const speakingEvents: SpeakingEvent[] = [];

/** Real contributions only — add entries with links to your actual PRs. */
export const openSourceContributions: OpenSourceContribution[] = [];

/** Real awards only — add entries you can evidence. */
export const awards: Award[] = [];

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing landscapes and street photography during travels.",
    icon: "camera"
  },
  {
    id: 2,
    title: "Reading",
    description: "Enjoy reading technical books and articles in my free time.",
    icon: "book-open"
  },
  {
    id: 3,
    title: "Hiking",
    description: "Exploring nature trails and mountains whenever possible. Specially northern areas of Pakistan.",
    icon: "mountain"
  },
  {
    id: 4,
    title: "Cricket",
    description: "Playing cricket with friends and family on weekends.",
    icon: "cricket"
  }
];