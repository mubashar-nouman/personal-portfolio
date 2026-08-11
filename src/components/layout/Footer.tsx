import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/mubashar-nouman' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mubashar-nouman' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mubashar_dev' },
  { icon: Mail, label: 'Email', href: 'mailto:mubashirrnouman@gmail.com' },
];

const Footer = () => (
  <footer className="border-t py-10">
    <div className="container">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight">
            Mubashar<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Full stack engineer building AI-powered SaaS products.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex gap-1">
          {socials.map((social) => (
            <Button key={social.label} asChild variant="ghost" size="icon" aria-label={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <social.icon />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <p className="mt-8 border-t pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mubashar Nouman. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
