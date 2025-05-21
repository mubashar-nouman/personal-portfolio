

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

export interface Experience {
  location: any;
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

export interface SpeakingEvent {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  link?: string;
}

export interface OpenSourceContribution {
  icon: any;
  id: number;
  project: string;
  description: string;
  link: string;
  category: string;
  stars?: number;
  pullRequests?: number;
  image?: string;
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Hobby {
  id: number;
  title: string;
  description: string;
  icon: string;
}