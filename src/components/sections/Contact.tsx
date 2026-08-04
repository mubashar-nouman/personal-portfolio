import React from 'react';
import Section from '../ui/Section';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const inputClasses =
  'w-full px-4 py-2 rounded-md border bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent';

const labelClasses = 'block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mvgogkop');

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to chat? Reach out to me."
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
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">Location</h4>
                <p className="text-zinc-600 dark:text-zinc-300">Lahore, Pakistan</p>
              </div>
            </div>
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
                  Message Sent Successfully!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
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
                    <label htmlFor="subject" className={labelClasses}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={inputClasses}
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className={labelClasses}>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={inputClasses}
                      required
                      rows={5}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md flex justify-center py-3 items-center bg-orange-500 hover:bg-orange-600 text-white transition-colors disabled:opacity-60 disabled:pointer-events-none"
                    disabled={state.submitting}
                  >
                    <Send size={18} className="mr-2" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>

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
