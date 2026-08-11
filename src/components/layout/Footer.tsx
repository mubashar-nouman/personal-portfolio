import React from 'react';
import SocialLinks from '../ui/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Mubashar<span className="text-orange-500">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Full Stack Software Engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} Mubashar Nouman. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-600">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-8 md:mb-0">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Contact
              </a>
            </nav>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Designed & Built with ❤️ by Mubashar Nouman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
