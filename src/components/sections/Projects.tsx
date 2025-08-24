import { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Calendar, Eye, Star, Users, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "MX Bot",
      description: "A centralized platform that allows users to access and interact with multiple LLM models in one place, simplifying management, integration, and usage.",
      tags: ["Next.js", "Node.js", "MongoDB", "Express", "Redux"],
      image: "/projects/mx-bot.png",
      demoLink: "https://mxbot-frontend.vercel.app/",
      codeLink: "https://github.com/mubashar-nouman/mxbot-frontend",
      year: "2025",
      category: "Web Dev",
      stats: { stars: 45, forks: 12, views: 1200 }
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "A tool that uses AI to generate content for blogs, social media, and marketing materials based on user inputs. Based on the predefined prompts, the user can generate content for theirselves",
      tags: ["Next.js", "ShadCN", "Node.js", "Express", "MongoDB"],
      image: "/projects/ai-content.png",
      demoLink: "https://ai-saas-next-react-js.vercel.app/",
      codeLink: "https://github.com/mubashar-nouman/ai-saas-next-react-js",
      year: "2025",
      category: "Web Dev",
      stats: { stars: 32, forks: 8, views: 890 }
    },
    {
      id: 3,
      title: "AI Chatbot Provider",
      description: "An application that offers AI chatbot services for websites, leveraging the OpenAI API to generate responses to visitor queries using the data provided by the site owner.",
      tags: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
      image: "/projects/ai-chatbot-provider.jpeg",
      demoLink: "",
      codeLink: "",
      year: "2024",
      category: "Web Dev",
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 4,
      title: "AI Resume Builder",
      description: "A mobile application that uses AI to generate resumes for users based on the job description provided. User make a profile and after that user have to just provide the job description and the application will generate a resume for the user.",
      tags: ["React Native", "FastAPI", "PostgreSQL"],
      image: "/projects/job-app.jpg",
      demoLink: "",
      codeLink: "",
      year: "2025",
      category: "Android Dev",
      stats: { stars: 0, forks: 0, views: 0 }
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Dev' },
    { id: 'android-dev', label: 'Android Dev' },
    // { id: 'ai-ml', label: 'AI/ML' },
    // { id: 'web-app', label: 'Web App' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        const projectCategory = project.category.toLowerCase().replace(/\s+/g, '-');
        console.log(`Project: ${project.title}, Category: "${project.category}" -> "${projectCategory}", Active Filter: "${activeFilter}"`);
        return projectCategory === activeFilter;
      });

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-4">
            <Zap size={16} className="mr-2" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Projects That Make a Difference
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Explore my latest projects that showcase innovation, creativity, and technical excellence
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700'
                  : 'bg-white/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:bg-gradient-to-r hover:from-zinc-50 hover:to-zinc-100 dark:hover:from-zinc-700/50 dark:hover:to-zinc-600/50 hover:border-zinc-300 dark:hover:border-zinc-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

                {/* Projects Grid */}
        <div className="text-center mb-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-600/90 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-zinc-800 backdrop-blur-sm">
                    <Calendar size={10} className="mr-1" />
                    {project.year}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ExternalLink size={14} className="text-zinc-800" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Github size={14} className="text-zinc-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-2" />
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-700 dark:hover:text-orange-300 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star size={12} className="mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />
                      {project.stats.forks}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1" />
                    {project.stats.views}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Demo
                    </a>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-sm font-medium cursor-not-allowed">
                      <ExternalLink size={14} className="mr-1.5" />
                      Not Live
                    </button>
                  )}
                  
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
                    >
                      <Github size={14} className="mr-1.5" />
                      Code
                    </a>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400 text-sm font-medium cursor-not-allowed">
                      <Github size={14} className="mr-1.5" />
                      Private Repo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

                          {/* Call to Action */}
         <div className="text-center">
           <div className="bg-white dark:bg-zinc-900 rounded-2xl p-10 shadow-lg border border-zinc-200 dark:border-zinc-700">
             <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
               Ready to work together?
             </h3>
             
             <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
               I'm available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
               <a
                 href="#contact"
                 className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors duration-200"
               >
                 Get in touch
               </a>
               <a
                 href="https://github.com/mubashar-nouman"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
               >
                 <Github size={16} className="mr-2" />
                 View projects
               </a>
             </div>
             
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
               <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
               <span className="text-sm text-orange-800 dark:text-orange-200 font-medium text-center">
                 <span className="hidden sm:inline">Available for: Freelance projects, full-time opportunities, and collaborations</span>
                 <span className="sm:hidden">Available for new projects</span>
               </span>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default Projects;
