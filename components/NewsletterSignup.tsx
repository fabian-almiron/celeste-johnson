'use client';

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mail size={40} className="text-secondary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get updates on Celeste's campaign, events, and latest news from District 59.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-4">
              <CheckCircle size={24} className="text-secondary" />
              <p className="font-semibold">Thanks for subscribing! Check your email for updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 md:px-6 py-3 rounded-lg text-neutral-900 font-medium focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-secondary-dark text-white px-6 md:px-8 py-3 rounded-lg font-bold transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
          
          <p className="text-sm text-blue-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
