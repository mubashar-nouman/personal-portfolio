import { Github, Star, GitFork, Eye } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    name: 'react-performance',
    description:
      'A collection of utilities and best practices for optimizing React application performance.',
    language: 'TypeScript',
    stars: 847,
    forks: 126,
    watchers: 38,
    url: 'https://github.com/username/react-performance',
  },
  {
    id: 2,
    name: 'auth-toolkit',
    description:
      'Authentication toolkit with support for multiple providers including OAuth, JWT, and SSO.',
    language: 'JavaScript',
    stars: 562,
    forks: 87,
    watchers: 24,
    url: 'https://github.com/username/auth-toolkit',
  },
  {
    id: 3,
    name: 'tailwind-components',
    description:
      'A library of reusable Tailwind CSS components for rapid UI development.',
    language: 'TypeScript',
    stars: 1243,
    forks: 218,
    watchers: 52,
    url: 'https://github.com/username/tailwind-components',
  },
  {
    id: 4,
    name: 'flask-starter',
    description:
      'Opinionated Flask starter template with authentication, database, and API structure.',
    language: 'Python',
    stars: 389,
    forks: 72,
    watchers: 19,
    url: 'https://github.com/username/flask-starter',
  },
];

// Language color mapping
const languageColors = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
};

const OpenSourceContributions = () => {
  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Open Source Contributions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Projects I’ve created and contributed to in the open source community.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Project Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      {project.name}
                    </a>
                  </h3>
                </div>
                <span className="flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white dark:text-gray-200">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      languageColors[project.language as keyof typeof languageColors] ||
                      'bg-zinc-500'
                    } mr-1.5`}
                  />
                  {project.language}
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-700 pt-4">
                <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-4 w-4 mr-1 text-orange-400" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1 text-zinc-400" />
                    <span>{project.watchers}</span>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
                >
                  View Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceContributions;
