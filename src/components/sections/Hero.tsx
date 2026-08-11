import { FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { projects } from '@/data';

const RESUME_URL = "/projects/Mubashar's_Resume.pdf";

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/mubashar-nouman' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mubashar-nouman' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mubashar_dev' },
];

const stats = [
  { value: '4+', label: 'Years shipping' },
  { value: '6', label: 'Products live' },
  { value: '24h', label: 'Reply time' },
];

/**
 * The portrait is a knockout on flat yellow, so it is seated in a warm panel
 * that repeats that yellow deliberately — the colour then reads as a designed
 * block rather than a stray photo background.
 */
const Hero = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Named proof under the fold: shipped products a visitor can go and look at.
  const shipped = projects.filter((project) => project.demoLink).slice(0, 4);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 pt-24 dark:border-zinc-800 dark:bg-zinc-900 md:pt-28"
    >
      {/* Warm wash behind the portrait side, anchoring the yellow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-14 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Copy */}
          <div className="order-2 animate-fade-up text-center lg:order-1 lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for new client projects
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-[3.4rem]">
              I build AI products
              <span className="block text-orange-600 dark:text-orange-500">that actually ship.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 lg:mx-0 lg:text-lg">
              I'm Mubashar — a full stack engineer who takes AI-powered SaaS from first scope to production. React,
              Next.js, Node.js and Python, with the billing, auth and infrastructure that turn a demo into a business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row lg:justify-start">
              <Button size="lg" onClick={() => scrollTo('#contact')}>
                <Mail />
                Start a project
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <FileText />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Stats + socials */}
            <div className="mt-9 flex flex-col items-center gap-6 sm:flex-row sm:items-center lg:justify-start">
              <dl className="flex gap-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-xl font-bold text-zinc-900 dark:text-white">{stat.value}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="hidden h-9 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />

              <div className="flex gap-1.5">
                {socials.map((social) => (
                  <Button key={social.label} asChild variant="ghost" size="icon" aria-label={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait panel */}
          <div className="order-1 animate-fade-up [animation-delay:120ms] lg:order-2">
            <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs lg:max-w-sm">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-amber-400 shadow-xl ring-1 ring-black/5 dark:bg-amber-500">
                <img
                  src="/mine.jpg"
                  alt="Mubashar Nouman"
                  width={640}
                  height={640}
                  className="block w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 lg:left-auto lg:right-4 lg:translate-x-0">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Senior Full Stack Engineer</p>
                <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">Lahore · US &amp; EU hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipped products */}
        {shipped.length > 0 && (
          <div className="mt-14 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div className="flex flex-col items-center gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                Shipped &amp; live
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {shipped.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-zinc-500 underline-offset-4 transition-colors hover:text-orange-600 hover:underline dark:text-zinc-400 dark:hover:text-orange-500"
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
