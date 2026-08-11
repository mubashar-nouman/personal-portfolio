import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CV_URL = 'https://drive.google.com/uc?export=download&id=1CSryFZ4PYKRPNb7xOhs-GnIWgtY2IKwf';

const stats = [
  { value: '4+', label: 'Years shipping' },
  { value: '6', label: 'Products live' },
  { value: '24h', label: 'Reply time' },
];

/**
 * Deliberately not full-viewport: the previous hero pushed the work itself
 * below the fold, which is the one thing a visitor actually came to see.
 */
const Hero = () => (
  <section id="home" className="border-b bg-background pt-28 md:pt-32">
    <div className="container pb-14 md:pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new client projects
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            I build AI products
            <br />
            that ship.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Mubashar, a full stack engineer specialising in AI-powered SaaS. Four years turning ideas into
            production software with React, Next.js, Node.js and Python — from first scope through to launch.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                <Mail />
                Start a project
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">
                View my work
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                <Download />
                CV
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex gap-1">
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <a href="https://github.com/mubashar-nouman" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <a href="https://linkedin.com/in/mubashar-nouman" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </Button>
            </div>

            <div className="h-8 w-px bg-border" aria-hidden="true" />

            <dl className="flex gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-lg font-semibold text-foreground">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="relative mx-auto w-52 sm:w-64 lg:w-full lg:max-w-sm">
            <img
              src="/mine.jpg"
              alt="Mubashar Nouman"
              className="aspect-square w-full rounded-2xl border object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
