import React, { useState } from 'react';
import Section from '../ui/Section';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: ''
  });

  const [state, handleSubmit] = useForm("mvgogkop");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to chat? Reach out to me."
      className="bg-white dark:bg-dark-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                <a href="mailto:mubashirrnouman@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                  mubashirrnouman@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                <a href="tel:+923087031050" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">
                  +92 (308) 7031050
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <div className="bg-white dark:bg-dark-700 rounded-lg p-6 border border-gray-100 dark:border-dark-600">
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-500 p-4 rounded-full">
                    <Check size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border bg-white dark:bg-dark-600 border-gray-300 dark:border-dark-500 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-md border bg-white dark:bg-dark-600 border-gray-300 dark:border-dark-500 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border bg-white dark:bg-dark-600 border-gray-300 dark:border-dark-500 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-2 rounded-md border bg-white dark:bg-dark-600 border-gray-300 dark:border-dark-500 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                      rows={5}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button type="submit" className="w-full rounded-md flex justify-center py-3 items-center bg-orange-500 hover:bg-orange-600 text-white" disabled={state.submitting}>
                    <Send size={18} className="mr-2" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
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
