import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 20 
}) => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={iconSize} />, url: 'https://github.com/mubashar-nouman' },
    { name: 'LinkedIn', icon: <Linkedin size={iconSize} />, url: 'https://linkedin.com/in/mubashar-nouman' },
    // { name: 'Twitter', icon: <Twitter size={iconSize} />, url: 'https://twitter.com/mubasharnouman' },
    { name: 'Email', icon: <Mail size={iconSize} />, url: 'mailto:mubashirrnouman@gmail.com' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;