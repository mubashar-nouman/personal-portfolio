import type { Experience } from '@/types';

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
