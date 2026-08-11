import type { Education, Certification } from '@/types';

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
