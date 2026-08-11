import { ArrowDown, Github, Linkedin, Instagram, Mail, Download, Check, Zap, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CV_URL = 'https://drive.google.com/uc?export=download&id=1CSryFZ4PYKRPNb7xOhs-GnIWgtY2IKwf';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/mubashar-nouman' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mubashar-nouman' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mubashar_dev' },
];

/**
 * Same layout and treatment as before — gradient name, floating stat chips,
 * bordered portrait. Type and controls are a step smaller: the h1 topped out
 * at 60px and the buttons at 54px, which crowded the fold on a laptop.
 */
const Hero = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-white pt-16 dark:bg-zinc-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl md:h-72 md:w-72"></div>
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-red-500/10 blur-3xl md:h-96 md:w-96"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] md:bg-[size:50px_50px]"></div>
      </div>

      <div className="container z-10 mx-auto px-4 py-8 lg:py-0">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Content */}
          <div className="order-1 space-y-4 text-center lg:order-1 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1 dark:border-orange-800 dark:from-orange-900/30 dark:to-red-900/30">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-orange-800 dark:text-orange-200">
                Available for new client projects
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1.5">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <span className="text-zinc-900 dark:text-zinc-100">Hi, I'm </span>
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                  Mubashar
                </span>
              </h1>
              <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 sm:text-xl md:text-2xl">
                Senior Full Stack Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400 lg:mx-0">
              I build AI-powered SaaS products end to end. 4+ years turning ideas into production software with
              React, Next.js, Node.js and Python.
            </p>

            {/* Trust markers */}
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 lg:justify-start">
              {['AI & LLM integrations', 'Web, mobile & API'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check size={14} className="flex-shrink-0 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-2.5 sm:flex-row lg:justify-start">
              <Button size="lg" onClick={() => scrollTo('#contact')}>
                <Mail />
                Hire me
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo('#projects')}>
                View my work
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                  <Download />
                  CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Connect with me:</span>
              <div className="flex gap-1.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-orange-600 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Portrait */}
          <div className="order-2 flex justify-center lg:order-2 lg:justify-end lg:pr-6">
            <div className="relative w-56 sm:w-64">
              <div className="absolute inset-0 h-56 w-56 rounded-full bg-gradient-to-br from-orange-500/8 to-red-500/8 blur-2xl sm:h-64 sm:w-64"></div>

              <div className="relative h-56 w-56 sm:h-64 sm:w-64">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-zinc-900">
                    <div className="h-full w-full overflow-hidden rounded-2xl">
                      <img src="/mine.jpg" alt="Mubashar Nouman" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl shadow-xl"></div>
              </div>

              {/* Floating stat chips */}
              <div className="absolute -right-3 -top-3 hidden rounded-lg border border-zinc-200 bg-white p-2 shadow-md dark:border-zinc-700 dark:bg-zinc-800 md:block">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">4+ years</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden rounded-lg border border-zinc-200 bg-white p-2 shadow-md dark:border-zinc-700 dark:bg-zinc-800 md:block">
                <div className="flex items-center gap-1.5">
                  <Zap size={14} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">AI SaaS</span>
                </div>
              </div>

              <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 rounded-lg border border-zinc-200 bg-white p-2 shadow-md dark:border-zinc-700 dark:bg-zinc-800 md:block">
                <div className="flex items-center gap-1.5">
                  <Check size={14} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollTo('#about')}
          className="group animate-bounce rounded-full border border-zinc-200 bg-white p-3 text-zinc-800 shadow-md transition-all duration-300 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          aria-label="Scroll down"
        >
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
