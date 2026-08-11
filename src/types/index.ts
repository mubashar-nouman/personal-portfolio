import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  /** Short positioning line shown under the title. */
  tagline: string;
  description: string;
  /** Concrete things built, phrased as delivered outcomes. */
  highlights: string[];
  tags: string[];
  image: string;
  year: string;
  category: ProjectCategory;
  demoLink?: string;
  codeLink?: string;
  /** Marks the lead case study, rendered larger than the rest. */
  featured?: boolean;
}

export type ProjectCategory = 'SaaS' | 'AI' | 'Mobile' | 'Web';

export interface Experience {
  location: string;
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
  icon?: LucideIcon;
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

export interface Service {
  id: number;
  title: string;
  description: string;
  /** Concrete deliverables a client receives. */
  deliverables: string[];
  /** Lucide icon name resolved by the Services section. */
  icon: 'sparkles' | 'layout' | 'server' | 'smartphone';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}