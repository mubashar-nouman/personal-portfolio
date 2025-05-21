import Section from '../ui/Section';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
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

  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      subtitle="Showcasing my recent work and contributions"
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-600"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Top-right corner decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-zinc-800/30 dark:bg-zinc-100/20 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="relative p-6 z-20 -mt-12">
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-100 dark:border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                    )}
                    
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                  
                  {/* Subtle accent line */}
                  <div className="h-1 w-12 bg-gradient-to-r from-zinc-400 to-zinc-300 dark:from-zinc-600 dark:to-zinc-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
