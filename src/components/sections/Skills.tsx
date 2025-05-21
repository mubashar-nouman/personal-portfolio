import React from 'react';
import { Code, Server, Database, Layout, Command, Globe } from 'lucide-react';

// Simple Section component included directly to avoid external dependencies
interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className, children }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{title}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["HTML", "CSS", "JavaScript", "Typescript", "React.js", "Redux", "Next.js", "Tailwind CSS", "ShadCN", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["Node.js", "Express", "Flask", "Python", "RESTful APIs", "GraphQL", "Fast API"]
    },
    {
      title: "Database",
      icon: <Database className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "ORM", "SQL"]
    },
    {
      title: "UI/UX - Wordpress",
      icon: <Command className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["WordPress", "Elementor", "Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Usability Testing"]
    },
    {
      title: "Development",
      icon: <Code className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["Agile Methodology", "Code Reviews", "Clean Code", "Performance Optimization", "SEO", "Accessibility", "Secure Applications"]
    },
    {
      title: "Other",
      icon: <Globe className="w-10 h-10 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300" />,
      skills: ["Problem Solving", "Technical Writing", "UI/UX Design", "Responsive Design", "API Integration", "Project Management", "Team Collaboration"]
    }
  ];

  return (
    <Section 
      id="skills" 
      title="Skills & Expertise" 
      subtitle="Technologies and tools I work with"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700 group overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm hover:shadow-md"
          >
            {/* Gradient accent in the corner */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-900 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            <div className="flex items-center mb-5 space-x-4">
              <div className="flex-shrink-0 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg shadow-md">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;