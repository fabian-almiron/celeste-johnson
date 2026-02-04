'use client';

import { useState, FormEvent } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Frontend only - simulate submission
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Sign up to receive campaign updates, event invitations, and ways to get involved in our community.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-neutral-900 focus:outline-none focus:ring-4 focus:ring-secondary"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary-dark px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-200 font-semibold">
              Thank you for signing up! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-200 font-semibold">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
