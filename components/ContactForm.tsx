'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Interest Field */}
      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-neutral-900 mb-2">
          How can we help? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
        >
          <option value="">Select an option</option>
          <option value="volunteer">I want to volunteer</option>
          <option value="question">I have a question</option>
          <option value="endorsement">I want to endorse Celeste</option>
          <option value="event">I want to host an event</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
          placeholder="Tell us more..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-spin">⏳</span> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={20} />
          </>
        )}
      </button>

      <p className="text-xs text-neutral-500">
        * Required fields
      </p>
    </form>
  );
};

export default ContactForm;
