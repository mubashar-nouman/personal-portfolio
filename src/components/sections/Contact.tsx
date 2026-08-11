import React from 'react';
import Section from '../ui/Section';
import { Mail, Phone, MapPin, Send, Check, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const inputClasses =
  'w-full px-4 py-2 rounded-md border bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent';

const labelClasses = 'block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mvgogkop');

  return (
    <Section
      id="contact"
      title="Let's Talk About Your Project"
      subtitle="Tell me what you're building and I'll reply within 24 hours with honest feedback on scope, timeline and cost."
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">Email</h4>
                <a href="mailto:mubashirrnouman@gmail.com" className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500 rounded-sm">
                  mubashirrnouman@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">Phone</h4>
                <a href="tel:+923087031050" className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500 rounded-sm">
                  +92 (308) 7031050
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/mubashar-nouman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500 rounded-sm"
                >
                  /in/mubashar-nouman
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">Location</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Lahore, Pakistan — available across US &amp; EU hours
                </p>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-800">
            <h4 className="font-medium text-zinc-900 dark:text-white">What happens next</h4>
            <ol className="mt-4 space-y-3">
              {[
                'I reply within 24 hours, usually sooner.',
                'We book a free 30-minute call to talk through scope.',
                'You get a written proposal with timeline and fixed cost.',
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-zinc-100 pt-4 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              No obligation, and I'll tell you honestly if I'm not the right fit.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-500 p-4 rounded-full">
                    <Check size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Thanks — your details are with me.
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  I'll review what you've sent and reply within 24 hours with next steps. If it's urgent, email me
                  directly at{' '}
                  <a href="mailto:mubashirrnouman@gmail.com" className="text-orange-500 hover:underline">
                    mubashirrnouman@gmail.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className={labelClasses}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className={inputClasses}
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className={labelClasses}>
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={inputClasses}
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="company" className={labelClasses}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={inputClasses}
                    />
                    <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="projectType" className={labelClasses}>
                        Project type
                      </label>
                      <select id="projectType" name="projectType" className={inputClasses} defaultValue="">
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

                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget range
                      </label>
                      <select id="budget" name="budget" className={inputClasses} defaultValue="">
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

                  <div className="mb-6">
                    <label htmlFor="message" className={labelClasses}>
                      What are you building? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={inputClasses}
                      placeholder="A short description of the product, the problem it solves, and any deadline you're working towards."
                      required
                      rows={5}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md flex justify-center py-3 items-center bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors disabled:opacity-60 disabled:pointer-events-none"
                    disabled={state.submitting}
                  >
                    <Send size={18} className="mr-2" />
                    {state.submitting ? 'Sending...' : 'Send project details'}
                  </button>

                  <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
                    I reply within 24 hours. Your details stay private.
                  </p>

                  <ValidationError errors={state.errors} className="mt-3 text-sm text-red-500 text-center" />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
