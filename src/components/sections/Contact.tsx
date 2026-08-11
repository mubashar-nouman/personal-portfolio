import { Check, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mubashirrnouman@gmail.com',
    href: 'mailto:mubashirrnouman@gmail.com',
  },
  { icon: Phone, label: 'Phone', value: '+92 (308) 7031050', href: 'tel:+923087031050' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/mubashar-nouman',
    href: 'https://linkedin.com/in/mubashar-nouman',
  },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan — US & EU hours' },
];

const nextSteps = [
  'I reply within 24 hours, usually sooner.',
  'We book a free 30-minute call to talk through scope.',
  'You get a written proposal with timeline and fixed cost.',
];

/**
 * Native <select> rather than the Radix one: this form posts straight to
 * Formspree, and native controls submit their value without extra wiring.
 */
const selectClasses =
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const Contact = () => {
  const [state, handleSubmit] = useForm('mvgogkop');

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about your project"
      description="Tell me what you're building and I'll reply within 24 hours with honest feedback on scope, timeline and cost."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <ul className="space-y-5">
            {details.map((detail) => (
              <li key={detail.label} className="flex gap-3.5">
                <detail.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border bg-card p-5">
            <h3 className="text-sm font-semibold">What happens next</h3>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold text-secondary-foreground">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t pt-4 text-xs text-muted-foreground">
              No obligation, and I'll tell you honestly if I'm not the right fit.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          {state.succeeded ? (
            <div className="py-8 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Thanks — your details are with me.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I'll review what you've sent and reply within 24 hours with next steps. If it's urgent, email me
                directly at{' '}
                <a href="mailto:mubashirrnouman@gmail.com" className="text-primary underline-offset-4 hover:underline">
                  mubashirrnouman@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your name *</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Your email *</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" autoComplete="organization" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="projectType">Project type</Label>
                  <select id="projectType" name="projectType" defaultValue="" className={cn(selectClasses)}>
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>AI / SaaS product</option>
                    <option>Web application</option>
                    <option>Mobile app</option>
                    <option>MVP build</option>
                    <option>Existing project / other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="budget">Budget range</Label>
                  <select id="budget" name="budget" defaultValue="" className={cn(selectClasses)}>
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Under $2,000</option>
                    <option>$2,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">What are you building? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="A short description of the product, the problem it solves, and any deadline you're working towards."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
              </div>

              <Button type="submit" className="w-full" disabled={state.submitting}>
                <Send />
                {state.submitting ? 'Sending…' : 'Send project details'}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                I reply within 24 hours. Your details stay private.
              </p>

              <ValidationError errors={state.errors} className="text-center text-sm text-destructive" />
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
