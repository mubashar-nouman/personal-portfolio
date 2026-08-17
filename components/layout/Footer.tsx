import SocialLinks from '@/components/ui/SocialLinks';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 py-10 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <h3 className="mb-1.5 text-base font-bold text-zinc-900 dark:text-white">
              Mubashar<span className="text-orange-500">.</span>
            </h3>
            <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-300">
              Full Stack Software Engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="mb-3" iconSize={18} />
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              © {currentYear} Mubashar Nouman. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-3 md:mb-0 md:justify-start">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Designed &amp; Built with ❤️ by Mubashar Nouman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
