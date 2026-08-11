import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Experience', href: '#experience' },
];

/**
 * Nav links and actions sit at 14px (text-sm), the shadcn navigation scale.
 * They were 16px before, which made the bar read heavier than the page.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/90'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#home"
            className="text-base font-bold text-zinc-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Mubashar<span className="text-orange-500">.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                size="sm"
                className="text-zinc-700 hover:bg-transparent hover:text-orange-600 dark:text-zinc-200 dark:hover:bg-transparent dark:hover:text-orange-400"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                </a>
              </Button>
            ))}

            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                >
                  Hire me
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile navigation toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="rounded-md px-1 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:text-orange-600 dark:text-zinc-200 dark:hover:text-orange-400"
              >
                {item.name}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              >
                Hire me
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
