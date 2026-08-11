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
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  location: string;
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
