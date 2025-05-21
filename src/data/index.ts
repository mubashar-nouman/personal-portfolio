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
  Hobby
} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and checkout.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with real-time updates, team collaboration, and analytics dashboards.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An application that uses AI to generate content for blogs, social media, and marketing materials based on user inputs.",
    tags: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Template Builder",
    description: "A drag-and-drop website builder specifically designed for portfolios with customizable templates and design options.",
    tags: ["React", "Node.js", "GraphQL", "AWS"],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
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
    title: "Full Stack Developer Certification",
    issuer: "Udemy",
    date: "2022",
    link: "https://udemy.com"
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

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "InnovateX",
    testimonial: "Mubashar is an exceptional developer who consistently delivers high-quality work. His technical expertise and problem-solving abilities have been invaluable to our projects.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "David Chen",
    position: "Product Manager",
    company: "TechSolutions",
    testimonial: "Working with Mubashar has been a fantastic experience. He not only brings technical excellence but also a deep understanding of user needs and business goals.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Design Director",
    company: "CreativeMinds",
    testimonial: "Mubashar has a rare ability to translate complex design requirements into flawless code. His attention to detail and collaborative approach make him a joy to work with.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure large-scale React applications for optimal performance and maintainability.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/1"
  },
  {
    id: 2,
    title: "The Future of Web Development: WASM and Beyond",
    excerpt: "Exploring how WebAssembly is changing the landscape of web development and what it means for JavaScript developers.",
    date: "April 3, 2023",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/2"
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Node.js Applications",
    excerpt: "Practical strategies for improving database performance in Node.js applications with real-world examples.",
    date: "March 12, 2023",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/3"
  }
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: 1,
    title: "The Evolution of Frontend Development",
    event: "ReactConf 2023",
    date: "September 2023",
    description: "A talk on how frontend development has evolved over the years and where it's headed in the future.",
    link: "https://example.com/talk/1"
  },
  {
    id: 2,
    title: "Building Accessible Web Applications",
    event: "A11y Summit",
    date: "July 2023",
    description: "Workshop on creating web applications that are accessible to all users, including those with disabilities.",
    link: "https://example.com/talk/2"
  },
  {
    id: 3,
    title: "Microservices Architecture with Node.js",
    event: "NodeCon 2022",
    date: "November 2022",
    description: "A deep dive into implementing microservices architecture using Node.js and Docker.",
    link: "https://example.com/talk/3"
  }
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "React",
    description: "Contributed to the React core library by fixing bugs and improving documentation.",
    link: "https://github.com/facebook/react",
    category: "Frontend",
    stars: 190000,
    pullRequests: 35,
    image: "https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg",
    icon: undefined
  },
  {
    id: 2,
    project: "Tailwind CSS",
    description: "Created plugins and contributed to the documentation to help improve the developer experience.",
    link: "https://github.com/tailwindlabs/tailwindcss",
    category: "CSS Framework",
    stars: 47000,
    pullRequests: 12,
    image: "https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.e8b47d8e.svg",
    icon: undefined
  },
  {
    id: 3,
    project: "Flask",
    description: "Fixed issues related to routing and contributed to the testing framework.",
    link: "https://github.com/pallets/flask",
    category: "Backend",
    stars: 60000,
    pullRequests: 7,
    image: "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png",
    icon: undefined
  }
];
    

export const awards: Award[] = [
  {
    id: 1,
    title: "Developer of the Year",
    issuer: "TechAwards",
    date: "2022",
    description: "Recognized for outstanding contributions to open-source software and technical innovation."
  },
  {
    id: 2,
    title: "Best Web Application",
    issuer: "WebDevConference",
    date: "2021",
    description: "Awarded for developing an innovative e-commerce platform with exceptional user experience."
  },
  {
    id: 3,
    title: "Hackathon Champion",
    issuer: "Global Code Challenge",
    date: "2020",
    description: "First place in a 48-hour hackathon for creating a solution to improve remote learning."
  }
];

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
    description: "Enjoy reading technical books and novels in my free time.",
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
    icon: "chess-knight"
  }
];