import React, { useState } from 'react';
import Section from '../ui/Section';
import { Mail, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      if (email && email.includes('@')) {
        setSubscribed(true);
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Section
      id="newsletter"
      title="Stay Updated"
      subtitle="Subscribe to the newsletter for insights, tips, and new projects"
      className="bg-zinc-50 dark:bg-zinc-900 py-16"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-8 md:p-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

          {!subscribed ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Join the Mailing List
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Be the first to receive new content, resources, and updates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-base rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    inline-flex items-center justify-center w-full py-3 px-4 text-base font-medium rounded-md
                    bg-zinc-900 text-white hover:bg-zinc-800
                    dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
                    transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500
                    disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                  `}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>


                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
              </form>
            </>
          ) : (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <CheckCircle2 size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                You're Subscribed!
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 max-w-md">
                You'll receive updates about new content, upcoming projects, and helpful insights.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Newsletter;
